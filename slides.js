function Slideleft(){
    this.xl=0;
    this.yl=0;
    this.xlspeed=0;
    this.ylspeed=0

    //this.xright=windowWidth;
    //this.yright=windowHeight;

    this.show=function(){
        this.xl+=this.xlspeed;
        this.yl+=this.ylspeed;
        if(this.yl<0 || this.yl>600)
        {
            this.xlspeed=-this.xlspeed;
            this.ylspeed=-this.ylspeed;
            console.log(this.ylspeed);
        }
        rect(this.xl, this.yl, 20, 100);
    }

    //this.showSlideRight=function(){
    //    rect(this.xright, this.yright, 20, 100);
    //}

    this.dir=function(x, y){
        this.xlspeed=x;
        console.log("changedit")
        this.ylspeed=y;
    }
}

