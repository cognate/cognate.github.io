import "./listings.scss";
import "jquery-typeahead";
import "jquery-typeahead/dist/jquery.typeahead.min.css";

// es-lint-ignore
const $ = require('jquery');
const Trademark = require('./trademark');
const BuildTimeline = require('./BuildTimeline');
const trademarkMap = require('./trademarkMap');
const templateService = require('./SimpleTemplateService');
const Handlebars = require('handlebars');

$().ready(function() {
  $('.js-typeahead').typeahead({
    order: 'asc',
    source: {
      groupName: {
        // Array of Objects / Strings
        data: Object.keys(trademarkMap),
      },
    },
  });
  $('#submit-address').on('click', async function() {
    $('#timeline-content').html(templateService.getTemplate('loading'));
    const mark = $('#trademark').val();
    const address = trademarkMap[mark][0];
    const results = await Trademark.getTrademarkForAddress(address);
    if (mark.indexOf('http') !== -1) {
      $('#timeline-content').html(
        templateService.getTemplate('timelineHeader', {
          address,
          mark: results.design,
          markHtml: new Handlebars.SafeString(`<img class="mark-img" src="${mark}"/><div>${results.design}</div>`),
          results: JSON.stringify(results),
        }),
      );
    } else {
      $('#timeline-content').html(
        templateService.getTemplate('timelineHeader', {
          address,
          mark: results.word,
          markHtml: new Handlebars.SafeString(`<h2 class="mark-title">${results.word}</h2>`),
          results: JSON.stringify(results),
        }),
      );
    }
    if (results.timeline && results.timeline.documents) {
      BuildTimeline.buildTimeline($('#timeline-content'), results.timeline.documents);
    }
  });
});
