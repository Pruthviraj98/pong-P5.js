function Slideright(){
    this.xr=1200;
    this.yr=0;
    this.xrspeed=0;
    this.yrspeed=0
    //this.xright=windowWidth;
    //this.yright=windowHeight;

    this.show=function(){
        this.xr+=this.xrspeed;
        this.yr+=this.yrspeed;
        if(this.yr<0 || this.yr>600)
        {
            this.xrspeed=-this.xrspeed;
            this.yrspeed=-this.yrspeed;
            console.log(this.yrspeed);
        }

        rect(this.xr, this.yr, 20, 100);
    }

    this.dir=function(x, y){
        this.xrspeed=x;
        console.log("changedit")
        this.yrspeed=y;
    }
}

