"use strict";

var Carousel = function Carousel(_ref) {
  var _this = this;

  var container = _ref.container,
      slidesWrapper = _ref.slidesWrapper,
      leftArrow = _ref.leftArrow,
      rightArrow = _ref.rightArrow;
  this.container = container;
  this.slidesWrapper = slidesWrapper;
  this.leftArrow = leftArrow;
  this.rightArrow = rightArrow;
  this.lastSlide = this.slidesWrapper.lastElementChild;
  this.firstSlide = this.slidesWrapper.firstElementChild;
  this.slidesCount = this.slidesWrapper.childElementCount;
  this.slideWidth;
  this.currentWrapperRight = getStyle(this.slidesWrapper, 'right');
  this.slideFrom;
  this.canSlide = true; // to prevent sliding while sliding

  this.currentSlide = 0;

  this.slideCarousel = function (dir, withTransition) {
    _this.slideWidth = getStyle(_this.container, 'width');
    _this.slideFrom = dir;
    var dirSign = dir === 'left' ? -1 : 1;
    _this.currentSlide += dirSign;
    var newcurrentWrapperRight = +_this.currentWrapperRight + +_this.slideWidth * dirSign;

    if (withTransition) {
      _this.slidesWrapper.style.transition = 'all 0.2s ease-in-out';
    }

    _this.slidesWrapper.style.right = newcurrentWrapperRight + 'px';
    _this.currentWrapperRight = newcurrentWrapperRight;
  }; // when transition end


  this.handleTransitionEnd = function () {
    _this.canSlide = true;
    _this.slidesWrapper.style.transition = 'none';

    if (_this.currentSlide === _this.slidesCount + 1) {
      _this.slidesWrapper.style.right = _this.slideWidth + 'px';
      _this.currentWrapperRight = _this.slideWidth;
      _this.currentSlide = 1;
    } else if (_this.currentSlide === 0) {
      var distance = _this.slidesCount * _this.slideWidth;
      _this.slidesWrapper.style.right = distance + 'px';
      _this.currentWrapperRight = distance;
      _this.currentSlide = _this.slidesCount;
    }
  }; // Rendr method


  this.render = function () {
    // _this.slidesWrapper.prepend(_this.lastSlide.cloneNode(true));
    _this.slidesWrapper.insertBefore(_this.lastSlide.cloneNode(true), _this.slidesWrapper.childNodes[0]);

    // _this.slidesWrapper.append(_this.firstSlide.cloneNode(true));
    _this.slidesWrapper.appendChild(_this.firstSlide.cloneNode(true));

    _this.slideCarousel('right');

    leftArrow.addEventListener('click', function (e) {
      if (_this.canSlide) {
        _this.slideCarousel('left', true);
      }
    });
    rightArrow.addEventListener('click', function (e) {
      if (_this.canSlide) {
        _this.slideCarousel('right', true);
      }
    });

    _this.slidesWrapper.addEventListener('transitionend', _this.handleTransitionEnd);

    _this.slidesWrapper.addEventListener('transitionstart', function () {
      _this.canSlide = false;
    });

    window.addEventListener('resize', function () {
      _this.slideWidth = getStyle(_this.container, 'width');
      _this.currentWrapperRight = _this.slideWidth * _this.currentSlide;
      _this.slidesWrapper.style.right = _this.slideWidth * _this.currentSlide + 'px';
    });
  };
};