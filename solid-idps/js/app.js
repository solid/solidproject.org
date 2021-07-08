var idpList = 'https://solid.github.io/solid-idp-list/services.json';
var recommended = ['https://solid.community/'];

/* ---- DON'T EDIT BELOW ---- */
var accURL = {};
var queryVals = (function(a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i)
    {
        var p=a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = p[1].replace(/\+/g, " ");
    }
    return b;
})(window.location.search.substr(1).split('&'));

var init = function() {
  var http = new XMLHttpRequest();
  http.open('GET', idpList);
  http.onreadystatechange = function() {
      if (this.readyState == this.DONE) {
        if (this.status === 200) {
          list(JSON.parse(http.responseText));
        } else {
          console.log("Can't load json file: "+this.status);
        }
      }
  };
  http.send();
};

var list = function(data) {
  for (i in data.idps) {
    var idp = data.idps[i];

    // card
    var card = document.createElement('div');
    card.classList.add('card');

    // header
    var header = document.createElement('header');
    header.style.background = (idp.icon_bg && idp.icon_bg.length > 0)?safeHTML(idp.icon_bg):'';
    card.appendChild(header);
    var header_link = document.createElement('a');
    header_link.href = safeHTML(idp.url);
    header.appendChild(header_link);

    // recommended?
    if (idp.url && idp.url.length > 0) {
      for (var i in recommended) {
        if (recommended[i] == idp.url) {
          var rec = document.createElement('div');
          rec.classList.add('recommended');
          rec.innerHTML = "Recommended";
          if (idp.btn_bg && idp.btn_bg.length > 0) {
            rec.style.background = safeHTML(idp.btn_bg);
          }
          if (idp.btn_color && idp.btn_color.length > 0) {
            rec.style.color = safeHTML(idp.btn_color);
          }
          header_link.appendChild(rec);
          break;
        }
      }
    }

    // icon
    if (idp.icon && idp.icon.length > 0) {
      var img = document.createElement('img');
      img.src = safeHTML(idp.icon);
      img.classList.add('roundicon');
      header_link.appendChild(img);
    } else {
      var img = '<div class="pad15">'+
      '      <div class="icon-placeholder">'+
      '        <div class="smiley">°⏑°</div>'+
      '      </div>'+
      '    </div>';
      header_link.insertAdjacentHTML('beforeend', img);
    }

    // title
    if (idp.title && idp.title.length > 0) {
      var title = document.createElement('div');
      title.classList.add('title');
      title.innerHTML = safeHTML(idp.title);
      header_link.title = "Take me to " + safeHTML(idp.title);
      if (idp.title_color && idp.title_color.length > 0) {
        title.style.color = safeHTML(idp.title_color);
      }
      header_link.appendChild(title);
    }

    // article
    var article = document.createElement('article');
    article.innerHTML = (idp.description && idp.description.length > 0)?safeHTML(idp.description):'';
    card.appendChild(article);
    // br
    article.appendChild(document.createElement('br'));
    // privacy
    if (idp.policyURL && idp.policyURL.length > 0) {
      var policy = document.createElement('a');
      policy.classList.add('external');
      policy.href = safeHTML(idp.policyURL);
      policy.innerHTML = "Privacy policy";
      policy.setAttribute('target', '_blank'); // change to modal maybe?
      article.appendChild(document.createElement('small').appendChild(policy));
    }

    // footer
    var footer = document.createElement('footer');
    card.appendChild(footer);
    // buttons div
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');
    footer.appendChild(buttons);
    var button = document.createElement('a');
    button.innerHTML = "Take me there";
    button.href = (idp.url && idp.url.length > 0)?safeHTML(idp.url):'#';
    if (queryVals['origin'] && queryVals['origin'].length > 0) {
      button.href += '?origin='+queryVals['origin'];
    }
    button.classList.add('button');
    if (idp.btn_bg && idp.btn_bg.length > 0) {
      button.style.background = safeHTML(idp.btn_bg);
    } else {
      button.classList.add('greenbg');
    }
    if (idp.btn_color && idp.btn_color.length > 0) {
      button.style.color = safeHTML(idp.btn_color);
    }
    buttons.appendChild(button);

    // append to DOM
    document.querySelector(".cards").appendChild(card);
  }

  var howto = '<div class="card">'+
    '  <header>'+
    '   <a href="https://github.com/solid/solid-idp-list/">'+
    '    <div class="pad15">'+
    '      <div class="icon-placeholder">'+
    '        <div class="smiley">°⏑°</div>'+
    '      </div>'+
    '    </div>'+
    '    <div class="title">&lt;Your service&gt;</div>'+
    '   </a>'+
    '  </header>'+
    '  <article>'+
    '    <p>Would you like to have your service name listed here?</p>'+
    '    <p>Click the button below to learn how you can register as an official Solid account provider.</p>'+
    '  </article>'+
    '  <footer>'+
    '    <div class="buttons">'+
    '      <a href="https://github.com/solid/solid-idp-list/" target="_blank" class="button">Learn more</a>'+
    '    </div>'+
    '  </footer>'+
    '</div>';
    document.querySelector(".cards").insertAdjacentHTML('beforeend', howto);
};

var safeHTML = function(str) {
  if (str && str.length > 0) {
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  return '';
};

init();
