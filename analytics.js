
// >>> Replace these IDs when you have them <<<
window.GA_ID = 'G-XXXXXXXXXX';          // e.g., G-ABCD123456
window.META_PIXEL_ID = '000000000000000'; // e.g., 123456789012345

(function(){
  // Google Analytics 4 (gtag.js)
  if (window.GA_ID && /^G-[A-Z0-9]+$/.test(window.GA_ID)) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + window.GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', window.GA_ID);
  }

  // Meta Pixel (Facebook/Instagram)
  if (window.META_PIXEL_ID && /^[0-9]{5,}$/.test(window.META_PIXEL_ID)) {
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', window.META_PIXEL_ID);
    fbq('track', 'PageView');

    // NoScript fallback
    document.addEventListener('DOMContentLoaded', function(){
      var nos = document.createElement('noscript');
      nos.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id='+window.META_PIXEL_ID+'&ev=PageView&noscript=1"/>';
      document.body.appendChild(nos);
    });
  }
})();
