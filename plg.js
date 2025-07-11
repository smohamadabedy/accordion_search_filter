(function($) {

  // Simple language dictionary
  const btAccLangs = {
    en: {
      alreadyAdded: "Already added"
    },
    fa: {
      alreadyAdded: "قبلا ثبت شده است"
    }
  };

  $.fn.btAcc_sf = function(options) {
    const system = this;

    // Set language
    const settings = $.extend({
      lang: 'en'
    }, options);
    const lang = btAccLangs[settings.lang] || btAccLangs.en;

    const txtSearch = $("#" + options.search_input_id);
    const txtFilter = $("#" + options.filter_input_id);
    const filterBtn = $("#" + options.filter_btn_id);
    const filterContainer = $("#" + options.filter_container);

    filterBtn.on("click", function() {
      system.addFilterData();
      system.showAll();
    });

    $(document).on("click", ".filter_data_close_btn", function() {
      system.removeFilterData($(this).closest("i"));
      system.showAll();
    });

    $(document).on("click", ".create_new_filter_data", function() {
      const filterText = $(this).text();
      const existing = system.getFilterData();
      if (existing.includes(filterText)) {
        alert(lang.alreadyAdded);
        return;
      }
      filterContainer.append(`<i class="btn btn-primary m-1">
        <span class="filter_data">${filterText}</span> |
        <span class="btn btn-danger filter_data_close_btn">X</span>
      </i>`);
      txtFilter.val("");
      system.showAll();
    });

    txtSearch.on("keyup", function() {
      const query = $(this).val().trim().toUpperCase();
      const filters = system.getFilterData();

      if (!query) {
        system.showAll();
        return;
      }

      system.closeAll();

      $(".accordion-body").each(function() {
        if ($(this).text().toUpperCase().includes(query)) {
          const labels = ($(this).parent().attr("data-filter-label") || "").split(";");
          if (filters.length === 0 || filters.some(f => labels.includes(f))) {
            $(this).parent().removeClass("collapse").addClass("show");
            $(this).parent().parent().show();
          }
        }
      });

      $(".accordion-header").each(function() {
        if ($(this).text().toUpperCase().includes(query)) {
          const collapse = $(this).siblings(".accordion-collapse");
          const labels = (collapse.attr("data-filter-label") || "").split(";");
          if (filters.length === 0 || filters.some(f => labels.includes(f))) {
            collapse.removeClass("collapse").addClass("show");
            collapse.parent().show();
          }
        }
      });
    });

    this.closeAll = function() {
      $(".accordion-collapse").each(function() {
        $(this).removeClass("show").addClass("collapse");
        $(this).parent().hide();
      });
    };

    this.showAll = function() {
      system.closeAll();
      const filters = system.getFilterData();
      if (filters.length > 0) {
        system.showByFilter();
      } else {
        $(".accordion-collapse").each(function() {
          $(this).parent().show();
        });
      }
    };

    this.removeFilterData = function(el) {
      el.remove();
      txtFilter.val("");
      txtSearch.val("");
    };

    this.addFilterData = function() {
      const val = txtFilter.val().trim();
      if (!val) return;
      const existing = system.getFilterData();
      if (existing.includes(val)) {
        alert(lang.alreadyAdded);
        return;
      }
      filterContainer.append(`<i class="btn btn-primary m-1">
        <span class="filter_data">${val}</span> |
        <span class="btn btn-danger filter_data_close_btn">X</span>
      </i>`);
      txtFilter.val("");
    };

    this.getFilterData = function() {
      return $(".filter_data").map(function() {
        return $(this).text();
      }).get();
    };

    this.showByFilter = function() {
      const filters = system.getFilterData();
      $(".accordion-collapse").each(function() {
        const labels = ($(this).attr("data-filter-label") || "").split(";");
        if (filters.some(f => labels.includes(f))) {
          $(this).parent().show(200);
        }
      });
    };

    return this;
  };

})(jQuery);
