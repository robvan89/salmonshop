var n = 0;
var f = 0;
var timeH = ['', 'Total', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
var custpH = 0;
var storefronts = [];

function Storefront(sname, minCust, maxCust, avpC, rslt) {
  this.sname = sname;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avpC = avpC;
  storefronts.push(this);
  this.rslt = [];
  this.total = 0;
  this.calcCust();
}

Storefront.prototype.getCust = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Storefront.prototype.calcCust = function() {
   for (n = 0; n < timeH.length - 2; n++) {
    this.custpH = this.getCust(this.minCust, this.maxCust);
    console.log(this.custpH + " is customers per hour");
    this.rslt.push(Math.round(this.custpH * this.avpC));
    this.total += this.rslt[n];
    console.log(this.rslt[n] + " is rslt at n");
    console.log(this.total + " is the total");
  }
  this.rslt.unshift(this.total);
};

var pikePlace = new Storefront('Pike Place Market', 17, 88, 5.2);
var seaTac = new Storefront('SeaTac Airport', 6, 44, 1.2);
var southcenterMall = new Storefront('Southcenter Mall', 11, 38, 1.9);
var bellSquare = new Storefront('Bellevue Square', 20, 48, 3.3);
var alki = new Storefront('Alki', 3, 24, 2.6);

function outWr() {
  var tmMk = document.getElementById('tm');
  var tableEl = document.createElement('table');
  tableEl.id = 'resTbl';
  var trEl = document.createElement('tr');

for (var i = 0; i <= timeH.length; i++) {
  // For each iteration of the loop; Create a TD element <td></td>
  var thEl = document.createElement('th');
  // For each LI element; Assign the contents of the array[i] to the TD's text content
  thEl.textContent = timeH[i];
  // Append the populated LI element back to the UL as a Child
  trEl.appendChild(thEl);
}
// Append the completely populated UL to the monthsEl element in index.html
tableEl.appendChild(trEl);

  for (f; f < storefronts.length; f++) {
    var taEl = document.createElement('tr');
    var tsEl = document.createElement('th');
    tsEl.textContent = storefronts[f].sname;
    taEl.appendChild(tsEl);
    console.log(storefronts[1].rslt.length);
      for (var r = 0; r < storefronts[f].rslt.length; r++) {
        var tcEl = document.createElement('td');
        tcEl.textContent = storefronts[f].rslt[r];
        taEl.appendChild(tcEl);
      }
    tableEl.appendChild(taEl);
  }
tmMk.appendChild(tableEl);
};

var render = function(event) {
  event.preventDefault();

  if (!event.target.storename.value || !event.target.minfield.value || !event.target.maxfield.value || !event.target.avgfield.value) {
    return alert('Fields cannot be empty!');
   }

  if ((event.target.minfield.value || event.target.maxfield.value || event.target.avgfield.value) === NaN) {
     return alert('Please enter a number.');
   }

  var newstoreName = event.target.storename.value;
  var newstoreMin = parseInt(event.target.minfield.value);
  var newstoreMax = parseInt(event.target.maxfield.value);
  var newstoreAvg = parseInt(event.target.avgfield.value);

  if(newstoreMin > newstoreMax) {
    return alert('Min must be less than max.');
  }

   var newStorefront = new Storefront(newstoreName, newstoreMin, newstoreMax, newstoreAvg);
   f = storefronts.length-1;
   console.log('New store ' + newstoreName + ' created. ' + newstoreMin + ' is the min customers. ' + newstoreMax + ' is the max customers. ' + newstoreAvg + ' is the avg customers.');

   event.target.storename.value = null;
   event.target.minfield.value = null;
   event.target.maxfield.value = null;
   event.target.avgfield.value = null;

   var tmRd = document.getElementById('resTbl');
   var thCr = document.createElement('th');
   var trCr = document.createElement('tr');
   thCr.textContent = storefronts[f].sname;
   trCr.appendChild(thCr);
   for (var p = 0; p < storefronts[f].rslt.length; p++) {
     var tdCr = document.createElement('td');
     tdCr.textContent = storefronts[f].rslt[p];
     trCr.appendChild(tdCr);
   }
   tmRd.appendChild(trCr);
}

storenameForm.addEventListener('submit', render);

outWr();
