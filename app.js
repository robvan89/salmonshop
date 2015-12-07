var n = 0;
var f = 0;
var total = 0;
var sname = ['Pike Place Market', 'SeaTac Airport', 'Southcenter Mall', 'Bellevue Square', 'Alki'];
var minCust = [17, 6, 11, 20, 3];
var maxCust = [88, 44, 38, 48, 24];
var timeH = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', 'Total'];
var custpH = 0;
var avpC = [5.2, 1.2, 1.9, 3.3, 2.6];
var rslt = [];

var storefront = {


  findLc: function(id) {
    this.sname = sname[id];
    console.log(this.sname);
    this.avpC = avpC[id];
    this.minCust = minCust[id];
    this.maxCust = maxCust[id];
  },

//Code adapted from MDN site
  getCust: function(minCust, maxCust) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust;
  },

  calcCust: function() {
    do {
      this.custpH = this.getCust();
      console.log(this.custpH);
      rslt[n] = Math.round(this.custpH * this.avpC);
      total += rslt[n];
      console.log(rslt[n]);
      n++;
    } while (n < timeH.length-1);
    rslt.push(total);
  },

  outWr: function() {
    var t = '';
    var tmMk = document.getElementById('tm');
  // Create a new UL element <ul></ul>
  var ulEl = document.createElement('ul');
  var toph = document.createElement('li');
  toph.textContent = 'Hour';
  toph.id = 'toprow';
  ulEl.appendChild(toph);

  // Loop through the months array, one index at a time
  for (var i = 0; i < timeH.length; i++) {
    // For each iteration of the loop; Create an LI element <li></li>
    var liEl = document.createElement('li');
    // For each LI element; Assign the contents of the array[i] to the LI's text content
    liEl.textContent = timeH[i];
    // Append the populated LI element back to the UL as a Child
    ulEl.appendChild(liEl);
  }
  // Append the completely populated UL to the monthsEl element in index.html
  tmMk.appendChild(ulEl);

  var rsMk = document.getElementById('rs');
// Create a new UL element <ul></ul>
var urEl = document.createElement('ul');
var roph = document.createElement('li');
roph.textContent = 'Expected Sales';
roph.id = 'toprow';
urEl.appendChild(roph);

// Loop through the months array, one index at a time
for (var i = 0; i < rslt.length; i++) {
  // For each iteration of the loop; Create an LI element <li></li>
  var liEl = document.createElement('li');
  // For each LI element; Assign the contents of the array[i] to the LI's text content
  liEl.textContent = rslt[i];
  // Append the populated LI element back to the UL as a Child
  urEl.appendChild(liEl);
}
// Append the completely populated UL to the monthsEl element in index.html
rsMk.appendChild(urEl);
  }

};

storefront.findLc(0);
storefront.getCust();
storefront.calcCust();
storefront.outWr();
