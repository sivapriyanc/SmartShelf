import React, { Component } from 'react';
import $ from "jquery"
class AislesLayout extends Component {
  componentDidUpdate() {
    $(".indicator").hover(function () {
      var title = $(this).attr("title");
      if (title !== undefined && title !== "") {
        var x = title.split('|');
        $("#imgid").attr("src", "productimg/" + x[0]);
        $("#aisleid").html(x[1]);
        $("#shelfid").html(x[2]);
        $("#capacityid").html(x[3]);

        $("#skuid").html(x[4]);

        $("#currentid").html(x[5]);

        $("#saleid").html(x[6]);

        $("#visitorsid").html(x[7]);

        $("#recorderid").html(x[8]);

        $("#replid").html(x[9]);

        $("#cycleid").html(x[10]);

        $("#nxtcycle").html(x[11]);
        
        $("#tempid").html(x[12]);
        $("#assoid").html(x[13]);
        
      }
      var alerttxt = $(this).attr("alerttext");
      if(alerttxt!== undefined && alerttxt !== '')
      {
        $("#alertid").html(alerttxt);
      }
      else{
        alerttxt = '';
        $("#alertid").html(alerttxt);
      }
      $('#myModal').modal({

        show: true,
        backdrop: false
      })
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 nopadding">
          <div className="row">
            <div className="col-sm-4 nopadding">
              <div className="shelf-box A1-S A1-S1 color1">
                <div className="shelfcontent">
                  <span className="lbprdname">Seafood</span>
                  <div className="prd-label">A1-S1</div>
                  <div className="indicator" id="b1" title="seafood.jpg|1|2|36|Seafood|36|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal" ><img src="productimg/sn-green.png" alt="" /></div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 nopadding-r">
              <div className="row">
                <div className="col-sm-4 nopadding">
                  <div className="shelf-box A1-S A1-S2 color1">
                    <div className="shelfcontent">
                      <span className="lbprdname">Processed Meats</span>
                      <div className="prd-label">A1-S2</div>
                      <div className="indicator"  title="frozen1.jpg|1|2|36|Processed Meats|12|5|12|10|24|12:30:35|14:00:00 PM|15 degree|Ron"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 nopadding">
                  <div className="shelf-box A1-S A1-S3 color1">
                    <div className="shelfcontent">
                      <span className="lbprdname">Grilled Red Meat</span>
                      <div className="prd-label">A1-S3</div>
                      <div className="indicator" title="grilledredmeat.jpg|1|3|36|Grilled Red Meat|12|5|12|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 nopadding">
                  <div className="shelf-box A1-S A1-S4 color1">
                    <div className="shelfcontent">
                      <span className="lbprdname">Farmed Fish</span>
                      <div className="prd-label">A1-S4</div>
                      <div className="indicator" title="farmedfish.jpg|1|4|36|Farmed Fish|12|5|12|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 nopadding">
                </div>
              </div>
            </div>
            <div className="col-sm-4 nopadding">
              <div className="row">
                <div className="col-sm-4 nopadding">
                  <div className="shelf-box A1-S A1-S5 color1">
                    <div className="shelfcontent">
                      <span className="lbprdname">Dairy</span>
                      <div className="prd-label">A1-S5</div>
                      <div className="indicator" title="dairy.jpg|1|5|36|Dairy|36|5|36|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 nopadding">
                  <div className="shelf-box A1-S A1-S6 color1">
                    <div className="shelfcontent">
                      <span className="lbprdname">Cheese</span>
                      <div className="prd-label">A1-S6</div>
                      <div className="indicator"  title="cheese.jpg|1|6|36|Cheese|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 nopadding">
                  <div className="shelf-box A1-S A1-S7 color1">
                    <div className="shelfcontent">
                      <span className="lbprdname">Egg</span>
                      <div className="prd-label">A1-S7</div>
                      <div className="indicator"  title="egg.jpg|1|7|36|Egg|30|5|30|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2 nopadding">
                </div>
              </div>
            </div>
          </div>
          <div className="row aisle4">
            <div className="col-sm-2">
              <div className="shelf-box">
                <div className="store-pos">
                  <div className="prd-label rotate-poc">POS</div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="row">
                <div className="col-sm-11">
                  <div className="shelf-box A4-S A4-S1 color3">
                    <div className="shelfcontent">
                      <span className="lbprdname">Frozen 1</span>
                      <div className="prd-label">A4-S1</div>
                      <div className="indicator"  title="frozen1.jpg|4|1|36|Frozen 1|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                </div>
              </div>
              <div className="row spacer-top">
                <div className="col-sm-11">
                  <div className="shelf-box A4-S A4-S2 color3a">
                    <div className="shelfcontent">
                      <span className="lbprdname">Frozen 2</span>
                      <div className="prd-label">A4-S2</div>
                      <div className="indicator"  title="frozen2.jpg|4|2|36|Frozen 2|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="shelf-box A4-S A4-S3 color3">
                        <div className="shelfcontent">
                          <span className="lbprdname">Apple</span>
                          <div className="prd-label">A4-S3</div>
                          <div className="indicator" alerttext="Temperature reaching maximum level" title="apple.jpg|4|3|20|Apple|9|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-yellow.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5 nopadding-r">
                      <div className="shelf-box A4-S A4-S4 color3">
                        <div className="shelfcontent">
                          <span className="lbprdname">Orange</span>
                          <div className="prd-label">A4-S4</div>
                          <div className="indicator"  title="orange.jpg|1|5|36|Orange|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row spacer-top">
                    <div className="col-sm-12 nopadding-r">
                      <div className="shelf-box A4-S A4-S5 color3">
                        <div className="shelfcontent">
                          <span className="lbprdname">Fruits</span>
                          <div className="prd-label">A4-S5</div>
                          <div className="indicator"  title="fruits.jpg|4|5|36|Fruits|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 nopadding">
                  <div className="shelf-box A4-S6 color3a">
                    <div className="shelfcontent">
                      <span className="lbprdname">Fruits</span>
                      <div className="prd-label">A4-S6</div>
                      <div className="indicator" title="fruits1.jpg|4|6|36|Fruits|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-10">
                  <div className="shelf-box A4-S A4-S7 color3a">
                    <div className="shelfcontent">
                      <span className="lbprdname">Vegetables</span>
                      <div className="prd-label">A4-S7</div>
                      <div className="indicator" alerttext="Shelf temperature below the minimum level"   title="vegetables1.jpg|4|7|36|Vegetables|0|5|0|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-red.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row spacer-top">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-10">
                  <div className="shelf-box A4-S A4-S8 color3">
                    <div className="shelfcontent">
                      <span className="lbprdname">Vegetables</span>
                      <div className="prd-label">A4-S8</div>
                      <div className="indicator" alerttext="Cycle count is due in 2 hours"  title="vegetables1.jpg|4|8|36|Vegetables|20|5|9|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-yellow.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-1 nopadding">
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="row">
                <div className="col-sm-8 nopadding">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="shelf-box A5-S1 color4">
                        <div className="shelfcontent">
                          <span className="lbprdname">Canned</span>
                          <div className="prd-label">A5-S1</div>
                          <div className="indicator"  title="canned.jpg|5|1|36|Canned|15|5|15|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row spacer-top">
                    <div className="col-sm-12">
                      <div className="shelf-box A5-S2 color5">
                        <div className="shelfcontent sf-m">
                          <span className="lbprdname">Wine & Spirits</span>
                          <div className="prd-label">A5-S2</div>
                          <div className="indicator"  title="wine.jpg|5|2|36|Wine & Spirits|36|5|36|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 nopadding-l">
                  <div className="shelf-box A5-S3 color4">
                    <div className="shelfcontent">
                      <span className="lbprdname">Diet Coke</span>
                      <div className="prd-label">A5-S3</div>
                      <div className="indicator"  title="dietcock.jpg|5|3|36|Diet Coke|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-5">
                  <div className="row">
                    <div className="col-sm-4 nopadding">
                      <div className="shelf-box A3-SA A3-S1 color6">
                        <div className="shelfcontent">
                          <span className="lbprdname">Dark Chocolate</span>
                          <div className="prd-label">A3-S1</div>
                          <div className="indicator"  title="darkchocolate.jpg|3|1|36|Dark Chocolate|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 nopadding">
                      <div className="shelf-box A3-SA A3-S2 color6">
                        <div className="shelfcontent">
                          <span className="lbprdname">Fresh Herbs</span>
                          <div className="prd-label">A3-S2</div>
                          <div className="indicator"  title="freshherbs.jpg|3|2|36|Fresh Herbs|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 nopadding">
                      <div className="shelf-box A3-SA A3-S4 color6a">
                        <div className="shelfcontent">
                          <span className="lbprdname">Dried Fruits</span>
                          <div className="prd-label">A3-S3</div>
                          <div className="indicator"  title="driedfruits.jpg|3|3|36|Dried Fruits|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-1">
                </div>
                <div className="col-sm-5 A3-B">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="shelf-box A3-SB A3-S5 color6">
                        <div className="shelfcontent">
                          <span className="lbprdname">Rice</span>
                          <div className="prd-label">A3-S4</div>
                          <div className="indicator"  title="rice.jpg|3|4|36|Rice|36|5|36|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row spacer-top">
                    <div className="col-sm-6 nopadding-r">
                      <div className="shelf-box A3-SB A3-S6 color6a">
                        <div className="shelfcontent">
                          <span className="lbprdname">Nuts</span>
                          <div className="prd-label">A3-S5</div>
                          <div className="indicator"  alerttext="Nuts quantity will end in next 2 hrs" title="nuts.jpg|3|5|36|Nuts|40|5|12|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-yellow.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 nopadding-l">
                      <div className="shelf-box A3-SB A3-S7 color6a">
                        <div className="shelfcontent">
                          <span className="lbprdname">Grains</span>
                          <div className="prd-label">A3-S6</div>
                          <div className="indicator"  title="grains.jpg|3|6|36|Grains|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row spacer-top40">
                <div className="col-md-2 col-md-offset-1 nopadding">
                  <div className="shelf-box A3-SC A3-SC1 color6">
                    <div className="shelfcontent">
                      <span className="lbprdname">White Flour</span>
                      <div className="prd-label">A3-S7</div>
                      <div className="indicator"  title="whiteflour.jpg|3|7|36|White Flour|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 nopadding">
                  <div className="shelf-box A3-SC A3-SC2 color6">
                    <div className="shelfcontent">
                      <span className="lbprdname">Refined Suger</span>
                      <div className="prd-label">A3-S8</div>
                      <div className="indicator" alerttext="Out of stock"  title="refinedsugar.jpg|3|8|36|Refined Suger|0|5|0|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-red.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 nopadding">
                  <div className="shelf-box A3-SC A3-SC3 color6">
                    <div className="shelfcontent">
                      <span className="lbprdname">Coconut Oil</span>
                      <div className="prd-label">A3-S9</div>
                      <div className="indicator"  title="coconutoil.jpg|3|9|36|Coconut Oil|20|5|20|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 nopadding">
                  <div className="shelf-box A3-SC A3-SC4 color6">
                    <div className="shelfcontent">
                      <span className="lbprdname">Sesame Oil</span>
                      <div className="prd-label">A3-S10</div>
                      <div className="indicator" alerttext="Out of stock"  title="sesameoil.jpg|3|10|36|Sesame Oil|0|5|0|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-red.png" alt="" /></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 nopadding">
                  <div className="shelf-box A3-SC A3-SC5 color6">
                    <div className="shelfcontent">
                      <span className="lbprdname">Olive Oil</span>
                      <div className="prd-label">A3-S11</div>
                      <div className="indicator"  title="oliveoil.jpg|3|11|36|Olive Oil|36|5|36|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-2 nopadding">
          <div className="row">
            <div className="col-sm-12 nopadding">
              <div className="shelf-box A2-S1 color2">
                <div className="shelfcontent">
                  <span className="lbprdname">Bakery</span>
                  <div className="prd-label">A2-S1</div>
                  <div className="indicator"  title="bakery.jpg|2|1|36|Bakery|50|5|50|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9 col-sm-push-3 nopadding">
              <div className="shelf-box A2-S2 color2">
                <div className="shelfcontent">
                  <span className="lbprdname">Popcorn</span>
                  <div className="prd-label">A2-S2</div>
                  <div className="indicator"  title="popcorn.jpg|2|2|36|Popcorn|36|5|36|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 nopadding">
              <div className="shelf-box A2-S3 color2">
                <div className="shelfcontent">
                  <span className="lbprdname">Potato Chips</span>
                  <div className="prd-label">A2-S3</div>
                  <div className="indicator" alerttext="Out of stock"  title="potatochips.jpg|2|3|36|Potato Chips|0|5|0|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-red.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 nopadding">
              <div className="shelf-box A2-S4 color2">
                <div className="shelfcontent">
                  <span className="lbprdname">Deli & Prepared Food</span>
                  <div className="prd-label">A2-S4</div>
                  <div className="indicator"  title="daliprepared.jpg|2|4|36|Deli & Prepared Food|36|5|36|10|24|12:30:35|14:00:00 PM|15 degree|Michal"><img src="productimg/sn-green.png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AislesLayout;