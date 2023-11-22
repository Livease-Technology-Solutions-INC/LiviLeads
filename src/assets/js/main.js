(function ($) {
	"use strict";
	
	var qayimaApp = {
		/* ---------------------------------------------
		    ## Content Loading
		--------------------------------------------- */	
		contentLoading: function() {
			$("body").imagesLoaded( function() {
				$('.preloader').delay(1000).fadeOut('slow');
				setTimeout(function() {
				    //After 2s, the no-scroll class of the body will be removed
				    $('body').removeClass('no-scroll');
					$("body").addClass("loading-done");
				}, 1000); //Here you can change preloader time

				// Page Animation Script
				$("[data-animate]").scrolla({
				    mobile: true,
				    once: true
                });

                var s_height = $('.site-header.default-header-style').height();  
                var w = $(window).width();
                if(w > 1199) {
                    $(".todo-details-menu").sticky({ topSpacing: s_height, center:true, className:"todo_sticky" });
                }
			});
		},	
        
        /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
        
		/* ---------------------------------------------
		    ## Menu Script
		--------------------------------------------- */
		menu_script: function() {
            if($('.mainmenu').find('li > a').siblings('.sub-menu')){
                $('.mainmenu li > .sub-menu').siblings('a').append("<span class='menu-arrow fas fa-sort-down'></span>");
            }
			var $submenu = $('.mainmenu').find('li').has('.sub-menu');
			$submenu.prepend("<span class='menu-click'><i class='menu-arrow icon-next1'></i></span>");
			var $mobileSubMenuOpen = $(".menu-click");
			$mobileSubMenuOpen.each(function() {
				var $self = $(this);
				$self.on("click", function(e) {
					e.stopImmediatePropagation();
				    $self.siblings(".sub-menu").slideToggle("slow");
				    $self.children(".menu-arrow").toggleClass("menu-extend");
                    
                    $(".site-header").toggleClass("sidemenu-active");
				});
            });

            //dashborad Menu
            $('.dashboard-menu-area > .btn-close').on('click', function () {
                $('.dashboard-menu-area').toggleClass('active');
            });

			//hamburger Menu
            if ($('.hamburger-menus').length) {
                var $hamburger_link = $('.hamburger-menus');
                $hamburger_link.on('click', function(e) {
                    e.preventDefault();
                    $(this).toggleClass('click-menu');
                    $(this).next().toggleClass('menuopen');
                });

                var $overlayClose = $('.overlaybg');
                $overlayClose.on('click', function(e) {
                    e.preventDefault();
                    $(this).parent().removeClass('menuopen');
                    $(this).parent().siblings('.hamburger-menus').removeClass('click-menu');
                });

                var el = document.querySelector('.site-navigation .navigation');
                if(el.length) {
                    SimpleScrollbar.initEl(el);
                }

                var menuelem = $('.hamburger-content .menu-block');
                var delay_count = 0;
                menuelem.find('ul.mainmenu > li').each(function(){
                    $(this).css('transition-delay', (delay_count * 200) + 'ms');
                    delay_count++;
                });
            } 
            /*-----------------------------------------------------------------
              Hamburger Menus Two
            -------------------------------------------------------------------*/
            $('.site-header.default-header-style .header-navigation-right-area .user-registration-area').clone().appendTo('.site-header.default-header-style .mobile-element-meta .mobile-user-registration');
            $('.site-header.header-style-one .header-navigation-right .user-registration-area').clone().appendTo('.site-header.header-style-one .mobile-element-meta .mobile-user-registration');

            //Todo Details Menu
            if ($('.todo-details-menu .todo-menu').length) {
                $('.todo-details-menu .todo-menu').onePageNav({
                    currentClass: 'current',
                    changeHash: true,
                    scrollSpeed: 750,
                    scrollThreshold: 0.5
                });
            }
        },	

        /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('#sticky-header').length ) {
                var stickyMenu = $('.site-header').clone().appendTo('#sticky-header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 1199) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky-header').slideDown(500);
                        } else {
                            $('#sticky-header').slideUp(500);
                        }
                    }
                });
            } 
            if ($('.site-header.header-style-two').length ) {
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 1) {
                        $('.site-header.header-style-two').addClass('active');
                    }else {
                        $('.site-header.header-style-two').removeClass('active');
                    }
                });
            } 
        },

        /* ---------------------------------------------
            ## Search
        --------------------------------------------- */
        search: function () {
            $('.search-wrap .search-btn').on('click', function(){
                if($(this).siblings('.search-form').hasClass('active')){

                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).removeClass('active');
                }
                else{
                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).siblings('.search-form').removeClass('active');
                    $(this).addClass('active');
                    $(this).siblings('.search-form').addClass('active').slideDown();
                }
            });
        },
        
        /* ---------------------------------------------
            ## Register User
        --------------------------------------------- */
        register_user: function() {
            $('.btn-register-now').on('click', function () {
                $('.user-signin-area').addClass('hidden');
                $('.user-signup-area').addClass('show');
            });
            
            $('.user-signin-area .btn-password').on('click', function () {
                $('.form-content-signin').addClass('hidden');
                $('.form-content-password').addClass('show');
            });
            
            $('.user-signin-area .btn-back').on('click', function () {
                $('.form-content-signin').removeClass('hidden');
                $('.form-content-password').removeClass('show');
            });
            
            $('.user-signup-area .form-btn-group .btn-signin').on('click', function () {
                $('.user-signin-area').removeClass('hidden');
                $('.user-signup-area').removeClass('show');
                $('.user-signin-area').addClass('show');
                $('.user-signup-area').addClass('hidden');
            });
        },
        /* ---------------------------------------------
            ## Count Down
        --------------------------------------------- */
        count_down: function() {
            if ($('#countdown').length) {
                $('#countdown').syotimer({
                    year: 2021,
                    month: 6,
                    day: 9,
                    hour: 20,
                    minute: 30
                }); 
            }
        },

        /*-------------------------------------------
            ## Nice select And Data Picker
        --------------------------------------------- */
        nice_select_data_picker: function () {
            $('.select-custom').niceSelect();
            
            if ($('#res_date').length) {
                $('#res_date').datetimepicker();
            }
        },
            
		/* ---------------------------------------------
		    ## Pop Up Scripts
		 --------------------------------------------- */
		popupscript: function() {	
			//Video Popup
			var $videoPopup = $(".video-popup");
			if ( $videoPopup.length > 0 ) {
			    $videoPopup.magnificPopup({
			        type: "iframe",
			        removalDelay: 300,
			        mainClass: "mfp-fade",
			        overflowY: "hidden",
			        iframe: {
			            markup: '<div class="mfp-iframe-scaler">'+
			            '<div class="mfp-close"></div>'+
			            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
			            '</div>',
			            patterns: {
			                youtube: {
			                    index: 'youtube.com/',
			                    id: 'v=',
			                    src: '//www.youtube.com/embed/%id%?autoplay=1'
			                },
			                vimeo: {
			                    index: 'vimeo.com/',
			                    id: '/',
			                    src: '//player.vimeo.com/video/%id%?autoplay=1'
			                },
			                gmaps: {
			                    index: '//maps.google.',
			                    src: '%id%&output=embed'
			                }
			            },
			            srcAction: 'iframe_src'
			        }
			    });
			}
		},

        /* ---------------------------------------------
            ## Review Rating
        --------------------------------------------- */
        review_rating: function () {
            if ($('.review-rating').length > 0) {
                var options = {
                    max_value: 5,
                    step_size: 0.5,
                }
                $(".review-rating").rate(options);
            }
        },
		
        
         /* ---------------------------------------------
            ## Brands Carousel
         --------------------------------------------- */
        brands_carousel: function() {
            if ($('.brands-carousel').length) {
                var items = 4;
                $('.brands-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },

        /*-------------------------------------------
            ## Listing Todo Single
        --------------------------------------------- */
        listing_todo_single: function() {
            if ($('.listing-todo-feature-list.carousel-nav-dots').length) {
                $('.listing-todo-feature-list.carousel-nav-dots').owlCarousel({
                    center: false,
                    items: 3,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    loop: true,
                    margin: 0,
                    singleItem : true,
                    dots: true,
                    nav: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        },
                        1400: {
                            items: 3
                        }
                    }
                });
            }
            if ($('.listing-todo-thumbnail-carousel').length) {
                $('.listing-todo-thumbnail-carousel').owlCarousel({
                    center: false,
                    items: 4,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    loop: true,
                    margin: 1,
                    singleItem : true,
                    dots: false,
                    nav: true,
                    navText: ["<span class='icon-back1'></span>", "<span class='icon-next1'></span>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        501: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: 3
                        },
                        1400: {
                            items: 4
                        }
                    }
                });
            }
            if ($('.listing-gallery-slide').length) {
                $('.listing-gallery-slide').owlCarousel({
                    center: false,
                    items: 1,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: true,
                    loop: true,
                    nav: false,
                    dots: true,
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Testimonial Carousel
		 --------------------------------------------- */
		testimonial_carousel: function() {
            var $member_items = $('.testimonial-carousel');
            var items = 3;
            if ($member_items.length) {
                $member_items.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    margin: 30,
                    singleItem: false,
                    smartSpeed: 700,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
            $('.testimonial-block .carousel-nav-text .btn-prev').click(function() {
                $member_items.trigger('prev.owl.carousel');
            });
            $('.testimonial-block .carousel-nav-text .btn-next').click(function() {
                $member_items.trigger('next.owl.carousel');
            });
        },
        /* ---------------------------------------------
		    ## Todos Carousel
		 --------------------------------------------- */
         todos_carousel: function() {
            var $todos_items = $('.todos-carousel');
            var items = 5;
            if ($todos_items.length) {
                $todos_items.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    margin: 0,
                    singleItem: false,
                    smartSpeed: 700,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        576: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: 3
                        },
                        1366: {
                            items: 4
                        },
                        1670: {
                            items: items
                        }
                    }
                });  
            }
            $('.todos-block .carousel-nav-text .btn-prev').click(function() {
                $todos_items.trigger('prev.owl.carousel');
            });
            $('.todos-block .carousel-nav-text .btn-next').click(function() {
                $todos_items.trigger('next.owl.carousel');
            });
        },

        /* ---------------------------------------------
            ## Features Location Carousel
		--------------------------------------------- */
		features_location_carousel: function() {
            var $featuredLocationCarousel = $(".featured-location-carousel");
            
			if( $featuredLocationCarousel.length ){
			    $featuredLocationCarousel.each(function() {

			        var items = parseInt( $(this).attr("data-owl-items"), 10);
			        if( !items ) items = 1;

			        var nav = parseInt( $(this).attr("data-owl-nav"), 2);
			        if( !nav ) nav = 0;

			        var dots = parseInt( $(this).attr("data-owl-dots"), 2);
			        if( !dots ) dots = 0;

			        var center = parseInt( $(this).attr("data-owl-center"), 2);
			        if( !center ) center = 0;

			        var loop = parseInt( $(this).attr("data-owl-loop"), 2);
			        if( !loop ) loop = 0;

			        var margin = parseInt( $(this).attr("data-owl-margin"), 10);
			        if( !margin ) margin = 0;

			        var autoWidth = parseInt( $(this).attr("data-owl-auto-width"), 2);
			        if( !autoWidth ) autoWidth = 0;

			        var navContainer = $(this).attr("data-owl-nav-container");
			        if( !navContainer ) navContainer = 0;

			        var autoplay = parseInt( $(this).attr("data-owl-autoplay"), 2);
			        if( !autoplay ) autoplay = 0;

			        var autoplayTimeOut = parseInt( $(this).attr("data-owl-autoplay-timeout"), 10);
			        if( !autoplayTimeOut ) autoplayTimeOut = 5000;

			        var autoHeight = parseInt( $(this).attr("data-owl-auto-height"), 2);
			        if( !autoHeight ) autoHeight = 0;

			        var animationIn = $(this).attr("data-owl-anim-in");
			        if( !animationIn ) animationIn = 0;
			        else animationIn = $(this).attr("data-owl-anim-in");	        

			        var animationOut = $(this).attr("data-owl-anim-out");
			        if( !animationOut ) animationOut = 0;
			        else animationOut = $(this).attr("data-owl-anim-out");


			        if( $("body").hasClass("rtl") ) var rtl = true;
			        else rtl = false;

			        if( items === 5 ){
			            $(this).owlCarousel({
			                navContainer: navContainer,
			                animateOut: animationOut,
			                animateIn: animationIn,
			                autoplayTimeout: autoplayTimeOut,
			                autoplay: autoplay,
			                autoHeight: autoHeight,
			                center: center,
			                loop: loop,
			                margin: margin,
			                autoWidth: autoWidth,
			                items: 1,
                            smartSpeed: 700,
			                autoplayHoverPause: 1,
			                nav: nav,
			                dots: dots,
			                rtl: rtl,
			                navText: [],
			                responsive: {
                                280: {
                                    items: 1
                                },
                                576: {
                                    items: 2
                                },
                                768: {
                                    items: 3
                                },
                                992: {
                                    items: 3
                                },
                                1200: {
                                    items: 4
                                },
                                1366: {
			                        items: items
			                    }
                            }
			            });
			        }
                    else if ( items === 4 ) {
			            $(this).owlCarousel({
			                navContainer: navContainer,
			                animateOut: animationOut,
			                animateIn: animationIn,
			                autoplayTimeout: autoplayTimeOut,
			                autoplay: autoplay,
			                autoHeight: autoHeight,
			                center: center,
			                loop: loop,
			                margin: margin,
			                autoWidth: autoWidth,
			                items: 1,
                            smartSpeed: 700,
			                autoplayHoverPause: 1,
			                nav: nav,
			                dots: dots,
			                rtl: rtl,
			                navText: [],
			                responsive: {
                                280: {
                                    items: 1
                                },
                                481: {
                                    items: 2
                                },
                                576: {
                                    items: 2
                                },
                                768: {
                                    items: 2
                                },
                                992: {
                                    items: 3
                                },
                                1200: {
                                    items: items
                                },
                                1366: {
			                        items: items
			                    }
                            }
			            });
                    }
                    if( $(this).find(".owl-item").length === 1 ){
			            $(this).find(".owl-nav").css( { "opacity": 0,"pointer-events": "none"} );
			        }
			    });
            }
            $('.featured-locations-block .carousel-nav-text .btn-prev').click(function() {
                $featuredLocationCarousel.trigger('prev.owl.carousel');
            });
            $('.featured-locations-block .carousel-nav-text .btn-next').click(function() {
                $featuredLocationCarousel.trigger('next.owl.carousel');
            });
		},
        
        /*-------------------------------------------
            ## Features Cat Carousel
        --------------------------------------------- */
        features_cat_carousel: function() {
            if ($('.features-cat-carousel').length) {
                $('.features-cat-carousel').owlCarousel({
                    center: false,
                    items: 5,
                    autoplay: false,
                    autoplayTimeout: 3000,
                    smartSpeed: 800,
                    loop: true,
                    margin: 10,
                    singleItem : true,
                    dots: false,
                    nav: false,
                    responsive: {
                        280: {
                            items: 2
                        },
                        481: {
                            items: 3
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        },
                        1200: {
                            items: 5
                        }
                    }
                });
            }
        },

        /*-------------------------------------------
            ## Mega Menu Carousel
        --------------------------------------------- */
        megamenu_carousel: function() {
            var $megamenu_items = $('.megamenu-carousel');
            var items = 4;
            if ($megamenu_items.length) {
                $megamenu_items.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    margin: 10,
                    singleItem: false,
                    smartSpeed: 700,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["<span>Prev</span>", "<span>Next</span>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
            var $megamenu_items = $('.megamenu-carousel-two');
            var items = 1;
            if ($megamenu_items.length) {
                $megamenu_items.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    margin: 10,
                    singleItem: false,
                    smartSpeed: 700,
                    loop: true,
                    dots: false,
                    nav: true,
                    navText: ["<span>Prev</span>", "<span>Next</span>"],
                    responsive: {
                        280: {
                            items: 1
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
		/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
		sidebarScript: function() {
			if ($('.sidebar-todos').length) {
                $('.sidebar-todos').theiaStickySidebar({
                    'containerSelector': '.todo-grid-list-content, .single-listing-todo-main, .user-profile-list-todo',
                    'additionalMarginTop': 0,
                    'minWidth': 992,
                });
            } 
        },	

        /*-------------------------------------------
            ## All Scroll Bar
        --------------------------------------------- */
        scroll_bar: function() {
            // qayima Sidebar Scroll
            //-------------------------------
            if ($('.listing-todo-main').length) {
                var $sidebar_scroll = $('.listing-todo-main');
                $sidebar_scroll.TrackpadScrollEmulator();
                $( window ).resize(function() {
                    setTimeout(function() {
                        $sidebar_scroll.TrackpadScrollEmulator('recalculate');
                    }, 250);
                });
            }
            // dashboard Menu Scroll
            //-------------------------------
            if ($('.dashboard-menu-main').length) {
                var $sidebar_scroll = $('.dashboard-menu-main');
                $sidebar_scroll.TrackpadScrollEmulator();
                $( window ).resize(function() {
                    setTimeout(function() {
                        $sidebar_scroll.TrackpadScrollEmulator('recalculate');
                    }, 250);
                });
            }
        },

        /* ---------------------------------------------
            ## Tags Keyword
        ---------------------------------------------- */
        tag_keyword: function() {
            if ($('#tag-keyword').length > 0) {
                var tagInput1 = new TagsInput({
                    selector: 'tag-keyword',
                    duplicate : false,
                    max : 8
                });
                tagInput1.addData(['tags' , 'here'])
            }
        },

        /* ---------------------------------------------
            ## Add Listing Tab
        --------------------------------------------- */
        add_listing_tab: function() {
            if ($('#add-listing-area').length > 0) {
                var frmInfo = $('#listinfo');
                var frmInfoValidator = frmInfo.validate();

                var frmloc = $('#listlocation');
                var frmlocValidator = frmloc.validate();

                var frmCat = $('#listcat');
                var frmCatValidator = frmCat.validate();

                $('#add-listing-area').steps({
                    onChange: function (currentIndex, newIndex, stepDirection) {
                        // step1
                        if (currentIndex === 0) {
                            if (stepDirection === 'forward') {
                                return frmInfo.valid();
                            }
                            if (stepDirection === 'backward') {
                                frmInfoValidator.resetForm();
                            }
                        }
                        // step3
                        if (currentIndex === 2) {
                            if (stepDirection === 'forward') {
                                return frmloc.valid();
                            }
                            if (stepDirection === 'backward') {
                                frmlocValidator.resetForm();
                            }
                        }
                        // step4
                        if (currentIndex === 3) {
                            if (stepDirection === 'forward') {
                                return frmCat.valid();
                            }
                            if (stepDirection === 'backward') {
                                frmCatValidator.resetForm();
                            }
                        }
                        return true;
                    },
                    onFinish: function () {
                        alert('Wizard Completed');
                    }
                });
            }
        },
        
        /* ---------------------------------------------
            ## Price Distance Range
        --------------------------------------------- */
        price_distance_range: function () {
            if ($('#search_distance').length > 0) {
                var onMove = function(e, percentage) {
                    $(".distance-value").text((percentage).toFixed(0));
                }
                var range = new RangeSlider($("#search_distance"), {
                  percentage: 60,
                  onMove: onMove,
                  onDown: onMove,
                  pollLimit: 100
                });
            }
            if ($('#search_price').length > 0) {
                var onMove = function(e, percentage) {
                    $(".price-value").text((percentage/0.005).toFixed(0));
                }
                var range = new RangeSlider($("#search_price"), {
                  percentage: 30,
                  onMove: onMove,
                  onDown: onMove,
                  pollLimit: 100
                });
            }
        },
        	

		/* ---------------------------------------------
		    ## Contact Form Script
		--------------------------------------------- */
		contactFormScript: function() {
			$(".hg-form-email [type='submit']").each(function(){
			    var text = $(this).text();
			    $(this).html("").append("<span>"+ text +"</span>").prepend("<div class='status'><i class='fas fa-circle-notch fa-spin spinner'></i></div>");
			});

			$(".hg-form-email [type='submit']").on("click", function(e){
			    var $button = $(this);
			    var $form = $(this).closest("form");
			    var pathToPhp = $(this).closest("form").attr("data-php-path");
			    $form.validate({
			        submitHandler: function() {
			            $button.addClass("processing");
			            $.post( pathToPhp, $form.serialize(),  function(response) {
			                $button.addClass("done").find(".status").append(response).prop("disabled", true);
			            });
			            return false;
			        }
			    });
			});

			$("form:not(.hg-form-email)").each(function(){
			    $(this).validate();
			});
        },
        
        /* ---------------------------------------------
            ## Line Chart
        ---------------------------------------------- */
        line_chart: function() {
            if ($('#simple-line-chart').length > 0) {
                new Chartist.Line('#simple-line-chart', {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    series: [
                        [1, 9, 7, 8, 5, 12, 5],
                        [2, 12, 9, 11, 7, 10, 3]
                    ]
                }, {
                    fullWidth: true,
                    axisY: {
                        labelInterpolationFnc: function(value) {
                            return (value * 500);
                        }
                    },
                    chartPadding: {
                        right: 40
                    },
                    plugins: [
                        Chartist.plugins.tooltip()
                    ]
                });
            }
            if ($('#simple-line-chart2').length > 0) {
                //Simple line chart
                new Chartist.Line('#simple-line-chart2', {
                    labels: false,
                    series: [
                        [1, 9, 7, 8, 5, 12, 15],
                    ]
                }, {
                    fullWidth: true,
                    chartPadding: {
                        left: -20
                    },
                    plugins: [
                        Chartist.plugins.tooltip()
                    ]
                });
            }
        },
        
        
        /* ---------------------------------------------
            ## Circle Progress
        ---------------------------------------------- */
        circle_progress: function() {
            if ($('#circle').length > 0) {
                $('#circle').circleProgress({
                    value: 1,
                    size: 130,
                    fill: {
                        color: ["#1d0176"]
                    }
                });
            }
            if ($('#circle1').length > 0) {
                $('#circle1').circleProgress({
                    value: 1,
                    size: 130,
                    fill: {
                        color: ["#1d0176"]
                    }
                });
            }
        },

		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
			qayimaApp.scroll_top();
			qayimaApp.menu_script();
			qayimaApp.sticky_header();
            qayimaApp.search();
            qayimaApp.register_user();
            qayimaApp.count_down();
            qayimaApp.nice_select_data_picker();
            qayimaApp.popupscript();
            qayimaApp.review_rating();
			qayimaApp.brands_carousel();
			qayimaApp.listing_todo_single();
            qayimaApp.features_cat_carousel();
            qayimaApp.testimonial_carousel();
            qayimaApp.todos_carousel();
            qayimaApp.features_location_carousel();
            qayimaApp.megamenu_carousel();
            qayimaApp.sidebarScript();
            qayimaApp.scroll_bar();
            qayimaApp.tag_keyword();
            qayimaApp.add_listing_tab();
            qayimaApp.price_distance_range();
			qayimaApp.contactFormScript();
			qayimaApp.line_chart();
			qayimaApp.circle_progress();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		qayimaApp.initializ();
	});

	$(window).on('load', function() {
		qayimaApp.contentLoading();
	});
})(jQuery);
