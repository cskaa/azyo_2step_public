class AzyoViewRender{get_azyo_content(){var e=this.create_div({class:"modal-content azyo-modal-content"}),t=this.get_azyo_content_wrapper(),i=this.get_azyo_header(),n=this.get_azyo_body(),s=this.get_azyo_footer(),a=this.get_azyo_error(),r=this.get_azyo_cc();return s=this.append_child(s,a,r),e=this.append_child(e,i,n,s),[t=this.append_child(t,e),e,i,n,s,a,r]}get_azyo_content_wrapper(){return this.create_div({class:"modal-dialog modal-dialog-centered modal-lg azyo-modal-dialog",role:"document"})}get_azyo_header(){return this.create_div({class:"modal-header azyo-modal-header"})}get_azyo_body(){return this.create_div({class:"modal-body azyo-modal-body"})}get_azyo_footer(){return this.create_div({class:"modal-footer azyo-moal-footer"})}get_azyo_cc(){var e=document.createElement("p");return e.setAttribute("class","azyo-cc"),e.innerHTML="Powered by AZYO",e}get_azyo_error(){return this.create_div()}create_div(e=Array){var t=document.createElement("div");for(var i in e)t.setAttribute(i,e[i]);return t}append_child(...e){var t=e[0];return Array.from(e.splice(1)).forEach((e=>t.appendChild(e))),t}}class AzyoView{AVR=new AzyoViewRender;constructor(e){this.init_args(e),this.detail={success:!1,name:"",message:"",view:this}}get_next_event(e){return new CustomEvent("next",{detail:e,bubbles:!0,cancelable:!0,composed:!1})}get_finished_event(e){return new CustomEvent("finished",{detail:e,bubbles:!0,cancelable:!0,composed:!1})}get_back_to_event(e){return new CustomEvent("backto",{detail:e,bubbles:!0,cancelable:!0,composed:!1})}init_args(e){this.args=e}init_view(){}distroy_view(){}render_view(e){}error_occured(e,t){this.error&&(this.error.innerHTML='<div style="color:red; text-align:center;">'+t+"</div>")}send_data(e,t,i){$.ajax({url:e,data:JSON.stringify(t),type:"POST",dataType:"json",contentType:"application/json",processData:!1,success:i,async:!1,error:e=>console.error("err")})}}class VideoUtils{static init_video(e){navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:!0}).then((function(t){e.srcObject=t})).catch((function(e){}))}static distroy_video(e){for(var t=e.srcObject.getTracks(),i=0;i<t.length;i++){t[i].stop()}e.srcObject=null}static takepicture(e){var t=e.height,i=e.width,n=document.createElement("canvas"),s=n.getContext("2d");return i&&t?(n.width=i,n.height=t,s.drawImage(e,0,0,i,t),n.toDataURL("image/png")):null}}class GreetingsView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,n.innerHTML='\n        <h5 class="modal-title" id="exampleModalLabel">Let\'s get you verified</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>',s.innerHTML="<h6>\n        Demo Inc would like to confirm your identity.\n        </h3>\n        <br>\n        <h7>\n            BEFORE YOU START, PLEASE:\n        </h7>\n        <br>\n        <ul>\n            <li>Prepare a valid government-issued identity document</li>\n            <li>Check if your device’s camera is uncovered and working</li>\n            <li>Be prepared to take a selfie and photos of your ID</li>\n        </ul>";var d=document.createElement("button");return d.type="button",d.classList.add("btn","btn-primary"),d.innerHTML="Start Session",this.next_btn=d,a.insertBefore(d,o),e.appendChild(t),d}init_view(){this.next_btn.addEventListener("click",(e=>{this.detail.success=!0,this.next_btn.dispatchEvent(this.get_next_event(this.detail))}))}}class SelfieView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,n.innerHTML='<h5 class="modal-title" id="exampleModalLabel">Take a selfie</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>';var d=document.createElement("h6");d.classList.add("azyo-modal-body-title"),d.innerHTML="Make sure that your face is in the frame and clearly visible.";var l=document.createElement("div");l.classList.add("azyo_video_container");var c=document.createElement("video");this.video=c,c.width=640,c.height=480,c.autoplay="true",c.id="azyo_vid",c.classList.add("azyo_videoElement");var h=document.createElement("button");h.type="button",h.classList.add("btn","btn-primary"),h.innerHTML="Take Photo",this.next_btn=h,a.insertBefore(h,o),l.append(c),s.append(d,l),e.appendChild(t)}init_view(){this.args.VideoUtils.init_video(this.video),this.next_btn.addEventListener("click",(e=>{var t=this.args.VideoUtils.takepicture(this.video),i=this.args.creds;i.required={image:t,step:"SELFIE"},this.send_data("/azyo_api/",i,(e=>{"success"!==e.status?(this.detail.success=!1,this.detail.name=e.error,this.detail.message=e.error_comment,this.next_btn.dispatchEvent(this.get_next_event(this.detail))):(this.detail.success=!0,this.next_btn.dispatchEvent(this.get_next_event(this.detail)))}))}))}distroy_view(){this.args.VideoUtils.distroy_video(this.video)}}class DocTypeView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,n.innerHTML='\n        <h5 class="modal-title" id="exampleModalLabel">Select Document Type</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>',s.innerHTML='\n        <h6 class="azyo-modal-body-title">\n                    Demo Inc would like to confirm your identity\n                </h6>\n                <br>\n                <div style = "display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-content: center;\n                padding-top: 10px;">\n                    <div style = "max-width: 50%;">\n                        <ul>\n                            <li>Prepare a valid government-issued identity document</li>\n                            <li>Check if your device’s camera is uncovered and working</li>\n                            <li>Be prepared to take photos of your ID</li>\n                        </ul>\n                    </div>\n                    <div style="margin-left: 40px; font-size: large; min-width: 30%;" id = "azyo_selection">\n                        <span>\n                            <h7>\n                                Country:     \n                            </h7>\n                            <div class="dropdown">\n                                <button class="btn btn-primary dropdown-toggle" type="button" id="country" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                Select Country\n                                </button>\n                                <div class="dropdown-menu" aria-labelledby="country">\n                                <button class="dropdown-item cou" type="button">India</button>\n                                <button class="dropdown-item cou" type="button">USA</button>\n                                <button class="dropdown-item cou" type="button">UAE</button>\n                                </div>\n                            </div>\n\n                        </span>\n                        <br>\n                        <span>\n                            <h7>\n                                State:\n                            </h7>\n                            <div class="dropdown">\n                                <button class="btn btn-primary dropdown-toggle" type="button" id="state" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                Select State\n                                </button>\n                                <div class="dropdown-menu" aria-labelledby="state">\n                                <button class="dropdown-item sta" type="button">Maharashtra</button>\n                                <button class="dropdown-item sta" type="button">Delhi</button>\n                                <button class="dropdown-item sta" type="button">Goa</button>\n                                </div>\n                            </div>\n\n                        </span>\n                        <br>\n                        <span>\n                            <h7>\n                                Document:    \n                            </h7>\n                            <div class="dropdown">\n                                <button class="btn btn-primary dropdown-toggle" type="button" id="document_type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                                Select Document\n                                </button>\n                                <div class="dropdown-menu" aria-labelledby="document_type">\n                                <button class="dropdown-item tp" type="button">Driving License</button>\n                                <button class="dropdown-item tp" type="button">Passport</button>\n                                <button class="dropdown-item tp" type="button">Adhar Card</button>\n                                </div>\n                            </div>\n        \n                        </span>\n                    </div>\n                </div>\n                ';var d=document.createElement("button");d.type="button",d.classList.add("btn","btn-primary"),d.innerHTML="Upload Document",this.next_btn=d,a.insertBefore(d,o),e.appendChild(t)}init_view(){let e=document.querySelectorAll(".tp"),t=document.getElementById("document_type");t.innerText=this.args.meta.document_type,e.forEach((e=>e.addEventListener("click",(function(){let i=e.innerText;t.innerText=i}))));let i=document.querySelectorAll(".sta"),n=document.getElementById("state");n.innerText=this.args.meta.state,i.forEach((e=>e.addEventListener("click",(function(){let t=e.innerText;n.innerText=t}))));let s=document.querySelectorAll(".cou"),a=document.getElementById("country");a.innerText=this.args.meta.country,s.forEach((e=>e.addEventListener("click",(function(){let t=e.innerText;a.innerText=t})))),this.next_btn.addEventListener("click",(e=>{var t=this.args.creds;t.required={document_type:"LICENCE",country:"IND",state:"MH",step:"DOCTYPE"},this.send_data("/azyo_api/",t,(e=>{"success"!==e.status?(this.detail.success=!1,this.detail.name=e.error,this.detail.message=e.error_comment,this.next_btn.dispatchEvent(this.get_next_event(this.detail))):(this.detail.success=!0,this.next_btn.dispatchEvent(this.get_next_event(this.detail)))}))}))}distroy_view(){}}class FrontsideView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,n.innerHTML='<h5 class="modal-title" id="exampleModalLabel">Get your document\'s <strong>FRONT</strong> side ready</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>';var d=document.createElement("h6");d.classList.add("azyo-modal-body-title"),d.innerHTML="Make sure your document is inside the frame";var l=document.createElement("div");l.classList.add("azyo_video_container");var c=document.createElement("video");this.video=c,c.width=640,c.height=480,c.autoplay="true",c.id="azyo_vid",c.classList.add("azyo_videoElement");var h=document.createElement("div");h.setAttribute("class","flip-card"),h.setAttribute("id","allcard"),h.setAttribute("style","position:absolute; opacity: 0.6; display: block;"),h.innerHTML='\n        <div class="flip-card-inner">\n            <div class="flip-card-front">\n                <img id = "frontpiccard" src="https://raw.githubusercontent.com/monacotime/azyo_embedded_viewport/main/cardfront.png" alt="Avatar" style="width:370px;height:250px;">\n            </div>\n        </div>\n        ';var u=document.createElement("button");u.type="button",u.classList.add("btn","btn-primary"),u.innerHTML="Take Photo",this.next_btn=u,a.insertBefore(u,o),l.append(h,c),s.append(d,l),e.appendChild(t)}init_view(){function e(){document.getElementById("allcard").style.display="none"}function t(){document.getElementById("allcard").style.display="block"}this.args.VideoUtils.init_video(this.video),document.getElementById("allcard").style.display="none",this.video.addEventListener("play",(i=>{setTimeout(t,500),setTimeout(e,2500)})),this.next_btn.addEventListener("click",(e=>{var t=this.args.VideoUtils.takepicture(this.video),i=this.args.creds;i.required={image:t,step:"FRONTSIDE"},this.send_data("/azyo_api/",i,(e=>{"success"!==e.status?(this.detail.success=!1,this.detail.name=e.error,this.detail.message=e.error_comment,this.next_btn.dispatchEvent(this.get_next_event(this.detail))):(this.detail.success=!0,this.next_btn.dispatchEvent(this.get_next_event(this.detail)))}))}))}distroy_view(){this.args.VideoUtils.distroy_video(this.video)}}class BacksideView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,document.createElement("div").innerHTML='<h5 class="modal-title" id="exampleModalLabel">Turn your ID card for capturing <strong>BACK</strong> side</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>';var d=document.createElement("h6");d.classList.add("azyo-modal-body-title"),d.innerHTML="Make sure your document is inside the frame";var l=document.createElement("div");l.classList.add("azyo_video_container");var c=document.createElement("video");this.video=c,c.width=640,c.height=480,c.autoplay="true",c.id="azyo_vid",c.classList.add("azyo_videoElement");var h=document.createElement("div");h.setAttribute("class","flip-card"),h.setAttribute("id","allcard"),h.setAttribute("style","position:absolute; opacity: 0.6; display: block;"),h.innerHTML='\n        <div class="flip-card-inner">\n            <div class="flip-card-front">\n                <img id = "frontpiccard" src="https://raw.githubusercontent.com/monacotime/azyo_embedded_viewport/main/cardfront.png" alt="Avatar" style="width:370px;height:250px;">\n            </div>\n            <div class="flip-card-back">\n                <img id = "backpiccard" src="https://raw.githubusercontent.com/monacotime/azyo_embedded_viewport/main/cardback.png" alt="Avatar" style="width:370px;height:250px;">\n            </div>\n        </div>\n        ';var u=document.createElement("button");u.type="button",u.classList.add("btn","btn-primary"),u.innerHTML="Take Photo",this.next_btn=u,a.insertBefore(u,o),l.append(h,c),s.append(d,l),e.appendChild(t)}init_view(){function e(){document.querySelector(".flip-card-inner").classList.toggle("is-flipped")}function t(){document.getElementById("allcard").style.display="none"}function i(){document.getElementById("allcard").style.display="block"}this.args.VideoUtils.init_video(this.video),document.getElementById("allcard").style.display="none",this.video.addEventListener("play",(n=>{setTimeout(i,150),setTimeout(e,1e3),setTimeout(t,3e3)})),this.next_btn.addEventListener("click",(e=>{var t=this.args.VideoUtils.takepicture(this.video),i=this.args.creds;i.required={image:t,step:"BACKSIDE"},this.send_data("/azyo_api/",i,(e=>{"success"!==e.status?(this.detail.success=!1,this.detail.name=e.error,this.detail.message=e.error_comment,this.next_btn.dispatchEvent(this.get_next_event(this.detail))):(this.detail.success=!0,this.next_btn.dispatchEvent(this.get_next_event(this.detail)))}))}))}distroy_view(){this.args.VideoUtils.distroy_video(this.video)}}class ResultGenView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,this.footer=a,this.cc=o;var d=document.createElement("link");d.setAttribute("rel","stylesheet"),d.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),t.insertBefore(d,i),n.innerHTML='<h5 class="modal-title" id="exampleModalLabel">Processing your data</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>',s.innerHTML='\n        <h6 class="azyo-modal-body-title">\n                    Please wait while we analyse your images\n                </h6>\n                <div style="margin-left: 60px;">\n                    <div>\n                        <div class = "azyo-instr">\n                            <i id = "ab" class="fa fa-circle-o-notch fa-spin"></i>\n                            Processing Your Selfie\n                        </div>\n                    </div>\n    \n                    <div>\n                        <div class = "azyo-instr">\n                            <i id = "bb" class="fa fa-circle-o-notch fa-spin"></i>\n                            Extracting Document Details\n                        </div>\n                    </div>\n\n                    <div>\n                        <div class = "azyo-instr">\n                            <i id = "cb" class="fa fa-circle-o-notch fa-spin"></i>\n                            Validating Results\n                        </div>\n                    </div>\n                </div>\n                <div style = "display: flex;\n                flex-direction: row;\n                justify-content: center;\n                align-content: center;">\n                    <div class= "res_holder" >\n                        <div class = "res_img_holder">\n                            <img id = "img1" class = "azyo_res_img" src="" alt="" />\n                            <img id = "img2" class = "azyo_res_img" src="" alt="" />\n                        </div>\n                        <div id = "azyo_res"></div>\n                        <br>\n                        Your KYC number is <span id = "kyc_no" style= "font-weight: bold;"></span>\n                        </div>\n                    </div>\n                </div>\n        ';var l=document.createElement("button");this.next_btn=l,l.type="button",l.classList.add("btn","btn-primary"),l.innerHTML="Thank You",a.insertBefore(l,o),e.appendChild(t)}init_view(){var e=document.getElementById("ab"),t=document.getElementById("bb"),i=document.getElementById("cb"),n=this.args.creds;n.required={step:"RESULTGEN"},this.send_data("/azyo_api/",n,(e=>{if("success"!==e.status){i.setAttribute("class","fa fa-times"),(s=document.getElementById("azyo_res")).setAttribute("style","color: red"),s.innerHTML="Document validation failed. Please Retry.",this.detail.success=!0,this.detail.name=e.error,this.detail.message=e.error_comment,this.detail.to=1,this.detail.view=this,this.detail.backto="INITIALIZED",this.next_btn.innerHTML="Retry",this.footer.insertBefore(this.next_btn,this.cc),this.next_btn.addEventListener("click",(e=>{this.next_btn.dispatchEvent(this.get_back_to_event(this.detail))}))}else{this.detail.success=!0;var t=e.step_response;document.getElementById("img1").setAttribute("src",t.selfie_img),document.getElementById("img2").setAttribute("src",t.ocr_img);var n=t.match_status.toUpperCase(),s=document.getElementById("azyo_res");if("TRUE"==n){document.getElementById("kyc_no").innerHTML=t.kyc,i.setAttribute("class","fa fa-check");var a="Face match confirmed";s.setAttribute("style","color: green"),this.next_btn.innerHTML="Thank You",this.next_btn.setAttribute("data-dismiss","modal"),this.next_btn.setAttribute("aria-label","Close"),this.next_btn.addEventListener("click",(e=>{this.next_btn.dispatchEvent(this.get_next_event(this.detail))}))}else{i.setAttribute("class","fa fa-times");a="Faces did not match";s.setAttribute("style","color: red"),this.next_btn.innerHTML="Retry",this.detail.success=!0,this.detail.name=e.error,this.detail.message=e.error_comment,this.detail.to=1,this.detail.view=this,this.detail.backto="INITIALIZED",this.next_btn.addEventListener("click",(e=>{this.next_btn.dispatchEvent(this.get_back_to_event(this.detail))}))}s.innerHTML=a,this.footer.insertBefore(this.next_btn,this.cc)}})),setTimeout((function(){e.setAttribute("class","fa fa-check")}),2e3),setTimeout((function(){t.setAttribute("class","fa fa-check")}),2500)}}class ThankyouView extends AzyoView{render_view(e){var[t,i,n,s,a,r,o]=this.AVR.get_azyo_content();this.error=r,n.innerHTML='<h5 class="modal-title" id="exampleModalLabel">Thank You</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>',s.innerHTML="Your verification process is complete!";var d=document.createElement("button");d.type="button",d.classList.add("btn","btn-primary"),d.innerHTML="Thank You",a.insertBefore(d,o),e.appendChild(t)}}class FineshedView extends AzyoView{render_view(e,t){var[i,n,s,a,r,o,d]=this.AVR.get_azyo_content();this.error=o,s.innerHTML='<h5 class="modal-title" id="exampleModalLabel">Verification Complete</h5>\n        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">\n            <span aria-hidden="true">&times;</span>\n        </button>',a.innerHTML='\n        <div style="text-align:center;">\n        Your azyo verification is complete here is your e-kyc number <b>'+t.kyc_number+"</b>\n        </div>";var l=document.createElement("button");l.type="button",l.classList.add("btn","btn-primary"),l.setAttribute("data-dismiss","modal"),l.setAttribute("aria-label","Close"),l.innerHTML="Thank You",r.insertBefore(l,d),e.appendChild(i)}check_results(e=!1){var t=this.args.creds;return t.required={step:"CHECK"},e&&(t.required.operation="GETRESULTS"),this.response=null,this.send_data("/azyo_api/",t,(e=>{this.response=e.step_response})),this.response}}var jquery=document.createElement("script");jquery.setAttribute("src","https://code.jquery.com/jquery-3.6.0.js"),jquery.setAttribute("integrity","sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="),jquery.setAttribute("crossorigin","anonymous"),document.getElementsByTagName("head")[0].appendChild(jquery);class AzyoViewPort{#current=0;#ends=null;#views=null;finish_on=null;constructor(e,t,i,n,s=null){this.client_code=t,this.user_name=i,this.meta=n,this.on_finish(s),this.#init_root(e);var a={creds:{client_code:this.client_code,user_name:this.user_name}};this.finished=new FineshedView(a),this.index={INITIALIZED:0,SELFIE:0,DOCTYPE:2,FRONTSIDE:3,BACKSIDE:4,RESULTGEN:5};var r=this.finished.check_results();if("complete"===r.status)this.kyc_number=r.kyc_number,this.finished.render_view(this.root,{kyc_number:this.kyc_number}),this.finished.init_view(),this.after_finish();else{var o=r.step,d=this.index[o];this.register_views([[GreetingsView,{}],[SelfieView,{VideoUtils:VideoUtils}],[DocTypeView,{}],[FrontsideView,{VideoUtils:VideoUtils}],[BacksideView,{VideoUtils:VideoUtils}],[ResultGenView,{}]],0===d),0!==d&&this.init_view(d)}}#init_root(e){this.root=e,this.root.addEventListener("next",(e=>{e.detail.success?this.next():(console.log("Failed",e.detail),e.detail.view.error_occured(e.detail.name,e.detail.message))})),this.root.addEventListener("backto",(e=>{if(e.detail.success){this.root.innerHTML="";var t=e.detail.view,i=t.args.creds;i.required={step:"BACK",backto:"INITIALIZED"},t.send_data("/test_api/",i,(e=>{})),this.init_view(e.detail.to)}else console.log("Failed",e.detail),e.detail.view.error_occured(e.detail.name,e.detail.message)}))}register_views(e,t=!1){var i=[];e.forEach((e=>{var t=e[0],n=e[1];if(n.creds={client_code:this.client_code,user_name:this.user_name},n.meta=this.meta,!((e=new t(n))instanceof AzyoView))throw Error(e.constructor.name+" is invalid");i.push(e)})),this.#views=i,this.#ends=this.#views.length-1,t&&this.init_first_view()}init_first_view(){this.init_view(0)}init_view(e){this.finished_()&&this.after_finish(),this.#current=e;var t=this.#views[e];this.#set_view(t)}islast_(){return this.#ends-1===this.#current}finished_(){return this.#ends==this.#current}#do_this_on_finished(){this.#set_view(this.finished)}next(){if(this.finished_())this.after_finish();else{this.#unset_view(this.#views[this.#current]);var e=this.#current+1,t=this.#views[e];this.#set_view(t),this.islast_()&&this.after_finish(),this.#current+=1}}after_finish(){var e=this.finished.check_results(!0).results;this.finish_on(e)}on_finish(e){this.finish_on=e}#set_view(e){e.render_view(this.root),e.init_view()}#unset_view(e){this.root.innerHTML="",e.distroy_view()}}