/**
 * Copyright Facebook Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @provides fb.xfbml.recommendations
 * @layer xfbml
 * @requires fb.type fb.xfbml.iframewidget
 */

/**
 * Implementation for fb:recommendations tag.
 *
 * @class FB.XFBML.Recommendations
 * @extends FB.XFBML.IframeWidget
 * @private
 */
FB.subclass('XFBML.Recommendations', 'XFBML.IframeWidget', null, {
  _visibleAfter: 'load',

  /**
   * Do initial attribute processing.
   */
  setupAndValidate: function() {
    this._attr = {
      header : this._getBoolAttribute('header'),
      width  : this._getPxAttribute('width', 300),
      height : this._getPxAttribute('height', 300),
      site   : this.getAttribute('site', location.hostname)
    };

    return true;
  },

  /**
   * Get the initial size.
   *
   * @return {Object} the size
   */
  getSize: function() {
    return { width: this._attr.width, height: this._attr.height };
  },

  /**
   * Get the URL bits for the iframe.
   *
   * @return {Object} the iframe URL bits
   */
  getUrlBits: function() {
    return { name: 'recommendations', params: this._attr };
  }
});
