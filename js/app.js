!function(c){function e(e){for(var n,t,a=e[0],o=e[1],r=e[2],s=0,i=[];s<a.length;s++)t=a[s],Object.prototype.hasOwnProperty.call(l,t)&&l[t]&&i.push(l[t][0]),l[t]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(c[n]=o[n]);for(f&&f(e);i.length;)i.shift()();return u.push.apply(u,r||[]),d()}function d(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,o=1;o<t.length;o++){var r=t[o];0!==l[r]&&(a=!1)}a&&(u.splice(n--,1),e=s(s.s=t[0]))}return e}var t={},l={0:0},u=[];function s(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return c[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=c,s.c=t,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)s.d(t,a,function(e){return n[e]}.bind(null,a));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="";var n=window.webpackJsonp=window.webpackJsonp||[],a=n.push.bind(n);n.push=e,n=n.slice();for(var o=0;o<n.length;o++)e(n[o]);var f=a;u.push([12,1]),d()}([function(e,n){e.exports=jQuery},function(e,n,t){"use strict";var a=t(8),o=t.n(a);o.a.options.positionClass="toast-top-right",o.a.options.preventDuplicates=!0,n.a=o.a},function(e,n){e.exports=GravAdmin},function(e,r,s){"use strict";(function(e){var n=s(0),t=s.n(n),a=s(3),o=t()("#offline-status");t()(window).on("offline",function(){o.slideDown()}),t()(window).on("online",function(){o.slideUp()}),t()(document).ready(function(){a.a||o.slideDown()}),r.a=void 0===e.navigator.onLine||e.navigator.onLine}).call(this,s(5))},function(e,h,m){"use strict";(function(e){m.d(h,"b",function(){return l}),m.d(h,"a",function(){return u}),m.d(h,"c",function(){return f}),m.d(h,"d",function(){return p});var n=m(0),t=m.n(n),r=m(1),s=m(3),i=m(2),a=m(11),o=m.n(a),c=!1,d=function(e){var n=new Error(e.statusText||e||"");return n.response=e,n};function l(e){return e}function u(e){return e.text().then(function(n){var e=n;try{e=JSON.parse(n)}catch(e){var t=document.createElement("div");t.innerHTML=n;var a=new Error;throw a.stack=o()(t.innerText),a}return e})}function f(e){if(c)return!0;var n,t=e.status||(e.error?"error":""),a=e.message||(e.error?e.error.message:null),o=e.toastr||null;switch(t){case"unauthenticated":throw document.location.href=i.config.base_url_relative,d("Logged out");case"unauthorized":t="error",a=a||"Unauthorized.";break;case"error":t="error",a=a||"Unknown error.";break;case"success":t="success",a=a||"";break;default:t="error",a=a||"Invalid AJAX response."}return o&&(n=Object.assign({},r.a.options),Object.keys(o).forEach(function(e){r.a.options[e]=o[e]})),a&&(s.a||!s.a&&"error"!==t)&&r.a["success"===t?"success":"error"](a),o&&(r.a.options=n),e}function p(e){if(c)return!0;var n=e.stack?"<pre><code>".concat(e.stack,"</code></pre>"):"";r.a.error("Fetch Failed: <br /> ".concat(e.message," ").concat(n))}t()(e).on("beforeunload._ajax",function(){c=!0})}).call(this,m(5))},,function(e,n){e.exports=GitSync},function(e,n,t){"use strict";(function(s){var i,c=t(4),d=t(2);n.a=function(e,n,t){var a,o=1<arguments.length&&void 0!==n?n:{},r=2<arguments.length&&void 0!==t?t:function(){return!0};return"function"==typeof o&&(r=o,o={}),o.method&&"post"===o.method&&(a=new FormData,o.body=Object.assign({"admin-nonce":d.config.admin_nonce},o.body||{}),Object.keys(o.body).map(function(e){return a.append(e,o.body[e])}),o.body=a),o=Object.assign({credentials:"same-origin",headers:{Accept:"application/json"}},o),s(e,o).then(function(e){return i=e}).then(c.b).then(c.a).then(c.c).then(function(e){return r(e,i)}).catch(c.d)}}).call(this,t(14))},,,,,function(e,n,t){"use strict";t.r(n);t(13)},function(e,n,d){"use strict";(function(b){function s(){var e=j.remodal({closeOnConfirm:!1}),n=j.find('[data-gitsync-action="previous"]'),t=j.find('[data-gitsync-action="next"]'),a=j.find('[data-gitsync-action="save"]');x=0,j.find("form > [class^=step-]:not(.step-".concat(x,") > .panel")).hide().removeClass("hidden"),j.find('form > [class="step-'.concat(x,'"] > .panel')).show(),t.removeClass("hidden"),n.addClass("hidden"),a.addClass("hidden");var o=O()('[name="data[webhook]"]').val(),r=O()('[name="data[webhook_secret]"]').val();O()('[name="gitsync[repository]"]').trigger("change"),O()('[name="gitsync[webhook]"]').val(o),O()('[name="gitsync[webhook_secret]"]').val(r),O()(".gitsync-webhook").text(o),e.open()}function y(e){e.attr("disabled","disabled").addClass("hint--top")}function k(e){e.attr("disabled",null).removeClass("hint--top")}var e=d(6),n=d.n(e),w=d(7),_=d(1),C=d(2),t=d(0),O=d.n(t),j=O()('[data-remodal-id="wizard"]'),i=O()('[data-remodal-id="reset-local"]'),a={github:"github.com",bitbucket:"bitbucket.org",gitlab:"gitlab.com",allothers:"allothers.repo"},o={REPO_URL:"https://{placeholder}/getgrav/grav.git"},x=0,T=0,r=null;O()(document).on("closed",j,function(e){x=0}),O()(document).on("click","[data-gitsync-useraction]",function(e){e.preventDefault();var n=O()(e.target).closest("[data-gitsync-useraction]"),t=n.data("gitsyncUseraction"),a="".concat(C.config.current_url,".json");switch(t){case"wizard":s();break;case"sync":var o=n.data("gitsync-uri");n.find("i").removeClass("fa-cloud fa-git").addClass("fa-circle-o-notch fa-spin"),Object(w.a)(o||a,{method:"post",body:{task:"synchronize"}},function(){n.find("i").removeClass("fa-circle-o-notch fa-spin").addClass(o?"fa-git":"fa-cloud")});break;case"reset":var r=i.remodal({closeOnConfirm:!1});r.open(),i.data("_reset_event_set_")||i.find('[data-gitsync-action="reset-local"]').one("click",function(){r.close(),i.data("_reset_event_set_",!0),n.find("i").removeClass("fa-history").addClass("fa-circle-o-notch fa-spin"),Object(w.a)(a,{method:"post",body:{task:"resetlocal"}},function(){i.data("_reset_event_set_",!1),n.find("i").removeClass("fa-circle-o-notch fa-spin").addClass("fa-history")})})}}),O()(document).on("click","[data-gitsync-action]",function(e){e.preventDefault();var n=O()(e.target).closest("[data-gitsync-action]"),t=j.find('[data-gitsync-action="previous"]'),a=j.find('[data-gitsync-action="next"]'),o=j.find('[data-gitsync-action="save"]'),r=n.data("gitsyncAction"),s=O()('[name="gitsync[repo_user]"]').val(),i=O()('[name="gitsync[no_user]"]').is(":checked"),c=O()('[name="gitsync[repo_password]"]').val(),d=O()('[name="gitsync[repo_url]"]').val(),l=O()('[name="gitsync[webhook]"]').val(),u=O()('[name="gitsync[webhook_enabled]"]').is(":checked"),f=O()('[name="gitsync[webhook_secret]"]').val();if(!n.attr("disabled")){var p=[];if(s||i||p.push("Username is missing."),d||p.push("Repository is missing."),["save","test"].includes(r)&&p.length)return _.a.error(p.join("<br />")),!1;if("save"===r){var h=O()('[name="gitsync[folders]"]:checked').map(function(e,n){return n.value});O()('[name="data[repository]"]').val(d),O()('[name="data[no_user]"]').val(i?"1":"0"),O()('[name="data[user]"]').val(s),O()('[name="data[password]"]').val(c),O()('[name="data[webhook]"]').val(l),O()('[name="data[webhook_enabled]"][value="'.concat(u?1:0,'"]')).prop("checked",!0),O()('[name="data[webhook_secret]"]').val(f);var m=O()('[name="data[folders][]"]');return m&&m[0]&&m[0].selectize&&m[0].selectize.setValue(h.toArray()),O()('[name="task"][value="save"]').trigger("click"),!1}if("test"===r){var g="".concat(C.config.current_url,".json"),v=b.btoa(JSON.stringify({user:i?"":s,password:c,repository:d}));return Object(w.a)(g,{method:"post",body:{test:v,task:"testConnection"}}),!1}j.find(".step-".concat(x," > .panel")).slideUp(),x+="next"===r?1:-1,j.find(".step-".concat(x," > .panel")).slideDown(),o.addClass("hidden"),"next"===r&&t.removeClass("hidden"),x<=0&&(t.addClass("hidden"),k(a)),0<x&&a.removeClass("hidden"),1===x&&(O()('[name="gitsync[repository]"]:checked').length?k:y)(a),2===x&&(O()('[name="gitsync[repo_url]"]').val().length?k:y)(a),x===T&&(a.addClass("hidden"),t.removeClass("hidden"),o.removeClass("hidden"))}}),O()(document).on("input",'[name="gitsync[no_user]"]',function(e){var n=O()(e.currentTarget),t=O()('[name="gitsync[repo_user]"]');n.is(":checked")?t.val("").prop("disabled","disabled").attr("placeholder","<username not required>"):t.prop("disabled",null).attr("placeholder","Username, not email")}),O()(document).on("change",'[name="gitsync[repository]"]',function(){k(j.find('[data-gitsync-action="next"]'))}),O()(document).on("input",'[name="gitsync[repo_url]"]',function(e){var n=O()(e.currentTarget).val(),t=j.find('[data-gitsync-action="next"]');(n.length?k:y)(t)}),O()(document).on("keyup",'[data-gitsync-uribase] [name="gitsync[webhook]"]',function(e){var n=O()(e.currentTarget).val();O()(".gitsync-webhook").text(n)}),O()(document).on("keyup",'[data-gitsync-uribase] [name="gitsync[webhook_secret]"]',function(e){O()('[data-gitsync-uribase] [name="gitsync[webhook_enabled]"]').trigger("change")}),O()(document).on("change",'[data-gitsync-uribase] [name="gitsync[webhook_enabled]"]',function(e){var n=O()(e.currentTarget),t=n.is(":checked"),a=O()('[name="gitsync[webhook_secret]"]').val();n.closest(".webhook-secret-wrapper").find("label:last-child")[t?"removeClass":"addClass"]("hidden"),O()(".gitsync-webhook-secret").html(t&&a.length?"<code>".concat(a,"</code>"):"<em>leave empty</em>")}),O()(document).on("change",'[name="gitsync[repository]"]',function(e){var n=O()(e.target);n.is(":checked")&&(r=n.val(),Object.keys(a).forEach(function(e){j.find(".hidden-step-".concat(e))[e===r?"removeClass":"addClass"]("hidden"),e===r&&(j.find(".webhook-secret-wrapper")["bitbucket"===e?"addClass":"removeClass"]("hidden"),j.find('input[name="gitsync[repo_url]"][placeholder]').attr("placeholder",o.REPO_URL.replace(/\{placeholder\}/,a[e])))}))}),O()(document).on("click","[data-access-tokens-details]",function(e){e.preventDefault();var n=O()(e.currentTarget),t=n.closest(".access-tokens").find(".access-tokens-details");t.slideToggle(250,function(){var e=t.is(":visible");n.find(".fa").removeClass("fa-chevron-down fa-chevron-up").addClass("fa-chevron-".concat(e?"up":"down"))})});function c(e){var n=O()(e),t=n.val().replace(/\//g,"-"),a=n.closest(".columns").find(".column:last");a.find('[class*="description-"]').addClass("hidden"),a.find(".description-".concat(t)).removeClass("hidden").hide().fadeIn({duration:250})}O()(document).on("input",'[data-remodal-id="wizard"] .step-4 input[type="checkbox"]',function(e){var n=O()(e.currentTarget);n.is(":checked")&&c(n)}),O()(document).on("mouseenter",'[data-remodal-id="wizard"] .step-4 .info-desc',function(e){var n=O()(e.currentTarget).siblings('input[type="checkbox"]');c(n)}),O()(document).on("mouseleave",'[data-remodal-id="wizard"] .step-4 label',function(e){O()(e.currentTarget).closest(".columns").find(".column:last-child").find('[class*="description-"]').addClass("hidden")}),O()(document).on("mouseleave",'[data-remodal-id="wizard"] .columns .column:first-child',function(e){O()(e.currentTarget).siblings(".column").find('[class*="description-"]').addClass("hidden")}),O()(document).ready(function(){T=j.find('[class^="step-"]').length-1,j.wrapInner("<form></form>"),i.wrapInner("<form></form>"),!j.length||!n.a.first_time&&n.a.git_installed||s()});n.a}).call(this,d(5))}]);