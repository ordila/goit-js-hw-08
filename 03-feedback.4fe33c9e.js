var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var n={save:(e,t)=>{try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(e){console.error("Set state error: ",e.message)}},load:e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}},l=r("kEUo3");const a={formEl:document.querySelector(".js-contact-form")},s={};!function(){const e=n.load("feedback-form-state");if(null!=e)for(const t of Object.keys(e))a.formEl.elements[t].value=e[t]}(),a.formEl.addEventListener("input",l.throttle((e=>{const{target:t}=e,o=t.value,r=t.name;s[r]=o,n.save("feedback-form-state",s)}),500)),a.formEl.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.clear(),console.log(s)}));
//# sourceMappingURL=03-feedback.4fe33c9e.js.map