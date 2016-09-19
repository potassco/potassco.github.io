$(document).ready(function() {
  var search_field = $('#search');
  var search_label = $('#search_area label');
  var search_clear = $('#search_area img');
  var search_area = $('#search_results_area');
  var search_count = $('#result_count');
  var search_results = $('#search_results');
  var search_results_heading = $('#search_results_heading');
  var json_search = new JSONSearch({
    fields: {
      title: 'infix',
      summary: 'word_prefix',
      content: 'word_prefix'
    },
    ranks: {
      title: 3,
      summary: 2,
      content: 1
    }
  });

  var search = function(e) {
    if (e && e.keyCode == 27) {
      clear();
    }
    var query = search_field.val();
    var results;
    if (!query) {
      results = posts;
      search_label.show();
      search_clear.hide();
      search_results_heading.hide();
    } else {
      results = json_search.getResults(query, posts);
      search_label.hide();
      search_clear.show();
      search_results_heading.show();
    }
    
    search_count.text('(' + results.length + ')');
    search_results.html(results.map(function(post) {
      return ('<li><a href="' + post.url + '">' + post.title + '</a><p>' + post.summary + '</p></li>');
    }).join(''));
  };

  var clear = function() {
    search_field.val('');
    search();
    search_field.blur();
  }

  search_field.on('keyup',  search);
  search_field.on('focus', function(e) {
    search_label.hide();
  });
  search_field.on('blur', function(e) {
    if (!search_field.val()) {
      search_label.show();
    }
  });
  search_clear.on('click', clear);
  if (!search_field.val()) {
    search_label.show();
  }
});
