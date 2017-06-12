import React, { Component } from 'react';
import _ from 'lodash';
// import Stepnavigation from './stepnavigation';
// import './lovemap.css';
import $ from 'jquery';



class Layout extends Component { 
    constructor() {
        super();		
        this.state = {
            borders: [
                {"id": "borders__single", "txt":"Single", "img":"../images/border0.png"},
                {"id": "borders__double", "txt":"Double", "img":"../images/border1.png"},
                {"id": "borders__none", "txt":"None", "img":"../images/border2.png"},
            ],
            data: [
                {"id": "size__8x10", "targetclass":"class1", "txt":"8x10", "cost":"$ 30"}, 
                {"id": "size__12x16", "targetclass":"class2", "txt":"12x16", "cost":"$ 40"},
                {"id": "size__18x24", "targetclass":"class3", "txt":"18x24", "cost":"$ 50"}
            ]
        }
    }

    bordersControl(){
        return _.map(this.state.borders, (border, index) => {
            return(
                <div key={index} className="option-radio">  
                    <input type="radio" id={border.id} name="border" value={border.txt} />                                
                    <label>
                        <span className="option-radio-img" onClick={this.drawBorder}><img id={border.id} src={border.img} alt="" /></span>
                        <span className="option-radio-txt">{border.txt} </span>
                    </label>
                </div>
            )
        });
    }
    posterSize(){
        return _.map(this.state.data, (datum, index) => {  
            return(
                <div key={index} className="option-radio option-radio-size">
                    <input type="radio" id={datum.id} name="size" value={datum.txt} />                            
                    <label>
                        <span className="option-radio-img" onClick={this.sizeControl}>
                            <img className={datum.targetclass} src="../images/size.png" alt="" />
                            <span className="option-size-txt">{datum.txt} </span>
                        </span>
                        <span className="option-radio-txt">{datum.cost} </span>
                    </label>
                </div>
            )
        });
    }
    drawBorder(e){
        // console.log(e.target.id);
        switch (e.target.id){
            case 'borders__single':
            {
                $(".poster").removeClass("borders-double");                
                $(".poster").removeClass("borders-none");
                $(".poster").addClass("borders-single");   

                $("#borders__single").attr('checked', true);
                $("#borders__double").attr('checked', false);
                $("#borders__none").attr('checked', false);             
                break;
            } 
            case 'borders__double': 
            {
                $(".poster").removeClass("borders-single");  
                $(".poster").addClass("borders-double");                
                $(".poster").removeClass("borders-none"); 
                $("#borders__single").attr('checked', false);
                $("#borders__double").attr('checked', true);
                $("#borders__none").attr('checked', false);                  
                break;
            } 
            default:
            {
                $(".poster").removeClass("borders-single");  
                $(".poster").removeClass("borders-double");                
                $(".poster").addClass("borders-none");  
                $("#borders__single").attr('checked', false);
                $("#borders__double").attr('checked', false);
                $("#borders__none").attr('checked', true);   
                break;
            } 

        }
    }
    sizeControl(e){        
        switch (e.target.className){
            case 'class1':
            {
                $(".poster").addClass("size-8x10");
                $(".poster").removeClass("size-12x16");
                $(".poster").removeClass("size-18x24");
                $("#size__8x10").attr('checked', true);
                $("#size__12x16").attr('checked', false);
                $("#size__18x24").attr('checked', false); 
                break;
            } 
            case 'class2': 
            {
                $(".poster").removeClass("size-8x10");
                $(".poster").addClass("size-12x16");
                $(".poster").removeClass("size-18x24");
                $("#size__8x10").attr('checked', false);
                $("#size__12x16").attr('checked', true);
                $("#size__18x24").attr('checked', false); 
                break;
            } 
            case 'class3':
            {
                $(".poster").removeClass("size-8x10");
                $(".poster").removeClass("size-12x16");
                $(".poster").addClass("size-18x24");
                $("#size__8x10").attr('checked', false);
                $("#size__12x16").attr('checked', false);
                $("#size__18x24").attr('checked', true); 
                break;
            } 
            default:
            break; 
        }
    }
    portrait(){
        $(".poster").addClass("orientation-portrait");
        $(".poster").removeClass("orientation-landscape");         
        // console.log("portrait");
    }
    landscape(){
        $(".poster").addClass("orientation-landscape"); 
        $(".poster").removeClass("orientation-portrait");
        // $(".poster-border").addClass("orientation-landscape");
        // console.log("landscape");
    }
    render() {
        return (
            <div className="toolbar-content">
                {/*<Stepnavigation />*/}
                <div id="tab-layout" className="toolbar-container">
                    <a href="#" className="toggle-link"><span><img src="../images/toggle.png" alt="" /></span></a>
                    <div className="option-block">
                        <div className="subtitle">Borders </div>
                        <div className="option-radio-wrap">
                            {this.bordersControl()}
                        </div>
                    </div>
                    <div className="option-block">
                        <div className="subtitle">Orientation </div>
                        <div className="option-radio-wrap">
                            <div className="option-radio option-radio-portrait">
                                <input type="radio" id="orientation__portrait" name="orientation" value="portrait" />                                
                                <label>
                                    <span className="option-radio-img" onClick={this.portrait}><img src="../images/layout-portrait.png" alt="" /></span>
                                    <span className="option-radio-txt">Portrait </span>
                                </label>
                            </div>
                            <div className="option-radio option-radio-landscape">
                                <input type="radio" id="orientation__landscape" name="orientation" value="landscape" />
                                <label>
                                    <span className="option-radio-img" onClick={this.landscape}><img src="../images/layout-portrait.png" alt="" /></span>
                                    <span className="option-radio-txt">Landscape </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="option-block option-block-poster">
                        <div className="subtitle">Poster Size </div>
                        <div className="option-radio-wrap">
                            {this.posterSize()}                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Layout;