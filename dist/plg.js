(function($) {

  const btAccLangs = {
    en: {
      alreadyAdded: "Already added",
      noResults: "No matching items in this group."
    },
    fa: {
      alreadyAdded: "قبلا ثبت شده است",
      noResults: "موردی در این گروه یافت نشد."
    }
  };

  $.fn.btAcc_sf = function(options) {
    const system = this;

    const settings = $.extend({
      lang: 'en'
    }, options);

    const lang = btAccLangs[settings.lang] || btAccLangs.en;

    const txtSearch = $("#" + settings.search_input_id);
    const txtFilter = $("#" + settings.filter_input_id);
    const filterBtn = $("#" + settings.filter_btn_id);
    const filterContainer = $("#" + settings.filter_container);

    // Bind add-filter
    filterBtn.on("click", function() {
      system.addFilterData();
      system.showAll();
    });

    // Remove individual filter
    $(document).on("click", ".filter_data_close_btn", function() {
      $(this).closest("i").remove();
      txtFilter.val("");
      txtSearch.val("");
      system.showAll();
    });

    // Add filter from shortcut
    $(document).on("click", ".create_new_filter_data", function() {
      const text = $(this).text().trim();
      const filters = system.getFilterData();
      if (filters.includes(text)) {
        alert(lang.alreadyAdded);
        return;
      }
      filterContainer.append(`<i class="btn btn-primary m-1">
        <span class="filter_data">${text}</span> |
        <span class="btn btn-danger filter_data_close_btn">X</span>
      </i>`);
      txtFilter.val("");
      system.showAll();
    });

    // Search input
    txtSearch.on("keyup", function() {
      const query = $(this).val().trim().toUpperCase();
      const filters = system.getFilterData();
      system.closeAll();

      $(".accordion").each(function() {
        let matchFound = false;

        $(this).find(".accordion-item").each(function() {
          const collapse = $(this).find(".accordion-collapse");
          const body = collapse.find(".accordion-body");
          const header = $(this).find(".accordion-header");
          const labels = (collapse.attr("data-filter-label") || "").split(";");

          const bodyMatch = body.text().toUpperCase().includes(query);
          const headerMatch = header.text().toUpperCase().includes(query);

          let labelMatch = true;
          if (filters.length > 0) {
            labelMatch = filters.some(f => labels.includes(f));
          }

          if ((bodyMatch || headerMatch) && labelMatch) {
            collapse.addClass("show").removeClass("collapse");
            $(this).show();
            matchFound = true;
          } else {
            $(this).hide();
          }
        });

        system.toggleGroupMessage($(this), !matchFound);
      });
    });

    this.getFilterData = function() {
      return $(".filter_data").map(function() {
        return $(this).text().trim();
      }).get();
    };

    this.addFilterData = function() {
      const val = txtFilter.val().trim();
      if (!val) return;
      const filters = system.getFilterData();
      if (filters.includes(val)) {
        alert(lang.alreadyAdded);
        return;
      }
      filterContainer.append(`<i class="btn btn-primary m-1">
        <span class="filter_data">${val}</span> |
        <span class="btn btn-danger filter_data_close_btn">X</span>
      </i>`);
      txtFilter.val("");
    };

    this.closeAll = function() {
      $(".accordion-item").hide();
      $(".accordion-collapse").removeClass("show").addClass("collapse");
    };

    this.showAll = function() {
      const filters = system.getFilterData();

      $(".accordion").each(function() {
        let matchFound = false;

        $(this).find(".accordion-item").each(function() {
          const collapse = $(this).find(".accordion-collapse");
          const labels = (collapse.attr("data-filter-label") || "").split(";");

          if (filters.length === 0 || filters.some(f => labels.includes(f))) {
            $(this).show();
            matchFound = true;
          } else {
            $(this).hide();
          }
        });

        system.toggleGroupMessage($(this), !matchFound);
      });
    };

    this.toggleGroupMessage = function($accordion, show) {
      let msg = $accordion.find(".btacc-no-result-message");

      if (show) {
        if (msg.length === 0) {
          msg = $(`<div class="btacc-no-result-message text-muted small p-2">${lang.noResults}</div>`);
          $accordion.append(msg);
        }
        msg.show();
      } else {
        msg.hide();
      }
    };

    return this;
  };

})(jQuery);
