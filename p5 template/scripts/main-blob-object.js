class Blobb {
    constructor(rs) {
      this.rs = rs;
    }
  
    move() {
  
    }
  
    show(x, y) {
      var r = this.rs;
      var sp = 0.03; // moving speed
      var def = 5; // deformation
      var blo = 4; // blobbiness
  
      push();
      translate(x, y);
      beginShape();
      var form = 0.02; // distance between the vertex
      for (var a = 0; a < TWO_PI; a += form) {
        var offset = map(sin(a * def + frameCount * sp), -4, 4, -blo, blo);
        r = r + offset;
        var xc = r * cos(a);
        var yc = r * sin(a);
   
        fill('#af1313');
        stroke('#a7a3b4');
  
        vertex(xc, yc);
        stroke(xc, yc, 100);
        //ellipse(xc, yc, offset*6, offset*6);
        //line(xc, yc, x, y);
  
      }
      endShape(CLOSE);
      pop();
  
    }
  
  }