class AzyoViewRender {

    get_azyo_content() {
        var content = this.create_div({'class': 'modal-content azyo-modal-content'})
        var wrapper = this.get_azyo_content_wrapper()
        var header = this.get_azyo_header()
        var body = this.get_azyo_body()
        var footer = this.get_azyo_footer()
        var error = this.get_azyo_error()
        var cc = this.get_azyo_cc()

        footer  = this.append_child(footer, error, cc)
        
        content = this.append_child(content, header, body, footer)
        wrapper = this.append_child(wrapper, content)

        return [wrapper, content, header, body, footer, error, cc]
    }

    get_azyo_content_wrapper() {
        var model_wrapper = this.create_div({'class': 'modal-dialog modal-dialog-centered modal-lg azyo-modal-dialog', 'role': 'document'})
        return model_wrapper
    }

    get_azyo_header() {
        var header = this.create_div({'class': 'modal-header azyo-modal-header'})
        return header
    }

    get_azyo_body() {
        var body = this.create_div({'class': 'modal-body azyo-modal-body'})
        return body
    }

    get_azyo_footer() {
        var body = this.create_div({'class': 'modal-footer azyo-moal-footer'})
        return body
    }

    get_azyo_cc() {
        var cc = document.createElement('p')
        cc.setAttribute('class', 'azyo-cc')
        cc.innerHTML = "Powered by AZYO"
        return cc
    }

    get_azyo_error() {
        var div = this.create_div()
        return div
    }

    create_div(attributes=Array) {
        var div = document.createElement('div')
        
        for (var att in attributes) {
            div.setAttribute(att, attributes[att])
        }

        return div
    }

    append_child(...args) {
        var parent = args[0]
        Array.from(args.splice(1)).forEach(el => parent.appendChild(el))
        return parent
    }
}


class AzyoView {
    AVR = new AzyoViewRender()

    constructor(args) {
        this.init_args(args)
        this.detail = {'success': false, 'name': '', 'message': '', 'view': this}
    }

    get_next_event(detail) {
        return new CustomEvent("next", {
            detail: detail,
            bubbles: true,
            cancelable: true,
            composed: false,
        });
    }

    get_finished_event(detail) {
        return new CustomEvent("finished", {
            detail: detail,
            bubbles: true,
            cancelable: true,
            composed: false,
        });
    }

    get_back_to_event(detail) {
        return new CustomEvent("backto", {
            detail: detail,
            bubbles: true,
            cancelable: true,
            composed: false,
        });
    }

    init_args(args) {this.args = args}

    init_view() {
    }
    
    distroy_view() {
    }

    render_view(root_div) {
    }

    error_occured(name, message) {
        if (this.error) {
            this.error.innerHTML = `<div style="color:red; text-align:center;">` + message + `</div>`
        }
    }

    send_data(where, data, on_success) {
        $.ajax({
            url: where, 
            data: JSON.stringify(data),
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            processData: false,
            success: on_success,
            async: false,
            error: err => console.error('err')
        });
    }
}

class VideoUtils {

    static init_video(video) {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (err0r) {
    
            });
        }
    }

    static distroy_video(video) {
        var stream = video.srcObject;
        var tracks = stream.getTracks();

        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];
            track.stop();
        }

        video.srcObject = null;
    }

    static takepicture(video) {
        var height = video.height
        var width = video.width
        
        var canvas = document.createElement('canvas')
        var context = canvas.getContext('2d')

        if (width && height) {
            canvas.width = width;
            canvas.height = height;
            context.drawImage(video, 0, 0, width, height);

            var data = canvas.toDataURL('image/png');
            return data
        }

        return null
    }
}

class GreetingsView extends AzyoView {
    render_view(root_div) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Let's get you verified</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        body.innerHTML = `<h6>
        Demo Inc would like to confirm your identity.
        </h3>
        <br>
        <h7>
            BEFORE YOU START, PLEASE:
        </h7>
        <br>
        <ul>
            <li>Prepare a valid government-issued identity document</li>
            <li>Check if your device’s camera is uncovered and working</li>
            <li>Be prepared to take a selfie and photos of your ID</li>
        </ul>`


        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Start Session"
        this.next_btn = next_btn

        footer.insertBefore(next_btn, cc)

        root_div.appendChild(wrapper)
        return next_btn
    }

    init_view() {
        this.next_btn.addEventListener('click', ev => {
            this.detail['success'] = true
            this.next_btn.dispatchEvent(this.get_next_event(this.detail))
        })
    }
}


class SelfieView extends AzyoView {
    render_view(root_div) {    
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        header.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Take a selfie</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        var body_title = document.createElement('h6')
        body_title.classList.add("azyo-modal-body-title")
        body_title.innerHTML = "Make sure that your face is in the frame and clearly visible."

        var video_container = document.createElement('div')
        video_container.classList.add("azyo_video_container")

        var video = document.createElement('video')
        this.video = video
        video.width = 640
        video.height = 480
        video.autoplay = "true"
        video.id = "azyo_vid"
        video.classList.add("azyo_videoElement")

        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Take Photo"
        this.next_btn = next_btn

        footer.insertBefore(next_btn, cc)

        video_container.append(video)
        body.append(body_title, video_container)
        
        root_div.appendChild(wrapper)
    }

    init_view() {
        this.args['VideoUtils'].init_video(this.video)

        this.next_btn.addEventListener('click', ev => {

            var photo = this.args['VideoUtils'].takepicture(this.video)

            var req_body = this.args['creds']
            req_body['required'] = {"image": photo, "step": "SELFIE"}

            this.send_data("/azyo_api/", req_body, res => {
    
                if (res['status'] !== 'success') {
                    this.detail['success'] = false
                    this.detail['name'] = res['error']
                    this.detail['message'] = res['error_comment']
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
                else {
                    this.detail['success'] = true
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
            })
        })
    }

    distroy_view() {
        this.args['VideoUtils'].distroy_video(this.video)
    }
}

class DocTypeView extends AzyoView {
    render_view(root_div) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        header.innerHTML = `
        <h5 class="modal-title" id="exampleModalLabel">Select Document Type</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        body.innerHTML = `
        <h6 class="azyo-modal-body-title">
                    Demo Inc would like to confirm your identity
                </h6>
                <br>
                <div style = "display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                padding-top: 10px;">
                    <div style = "max-width: 50%;">
                        <ul>
                            <li>Prepare a valid government-issued identity document</li>
                            <li>Check if your device’s camera is uncovered and working</li>
                            <li>Be prepared to take photos of your ID</li>
                        </ul>
                    </div>
                    <div style="margin-left: 40px; font-size: large; min-width: 30%;" id = "azyo_selection">
                        <span>
                            <h7>
                                Country:     
                            </h7>
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="country" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Country
                                </button>
                                <div class="dropdown-menu" aria-labelledby="country">
                                <button class="dropdown-item cou" type="button">` + `India` + `</button>
                                <button class="dropdown-item cou" type="button">` + `USA` + `</button>
                                <button class="dropdown-item cou" type="button">` + `UAE` + `</button>
                                </div>
                            </div>

                        </span>
                        <br>
                        <span>
                            <h7>
                                State:
                            </h7>
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="state" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select State
                                </button>
                                <div class="dropdown-menu" aria-labelledby="state">
                                <button class="dropdown-item sta" type="button">` + `Maharashtra` + `</button>
                                <button class="dropdown-item sta" type="button">` + `Delhi` + `</button>
                                <button class="dropdown-item sta" type="button">` + `Goa` + `</button>
                                </div>
                            </div>

                        </span>
                        <br>
                        <span>
                            <h7>
                                Document:    
                            </h7>
                            <div class="dropdown">
                                <button class="btn btn-primary dropdown-toggle" type="button" id="document_type" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select Document
                                </button>
                                <div class="dropdown-menu" aria-labelledby="document_type">
                                <button class="dropdown-item tp" type="button">` + 'Driving License' + `</button>
                                <button class="dropdown-item tp" type="button">` + `Passport` + `</button>
                                <button class="dropdown-item tp" type="button">` + `Adhar Card` + `</button>
                                </div>
                            </div>
        
                        </span>
                    </div>
                </div>
                `

        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Upload Document"
        this.next_btn = next_btn

        footer.insertBefore(next_btn, cc)
        
        root_div.appendChild(wrapper)
    }

    init_view() {
        let links = document.querySelectorAll('.tp')
        let doctype = document.getElementById('document_type')
        doctype.innerText = this.args['meta']['document_type']
        links.forEach(element => element.addEventListener("click", function () {
            let text = element.innerText
            doctype.innerText = text
        }))

        let coulinks = document.querySelectorAll('.sta')
        let state = document.getElementById('state')
        state.innerText = this.args['meta']['state']

        coulinks.forEach(element => element.addEventListener("click", function () {
            let text = element.innerText
            state.innerText = text
        }))

        let stalinks = document.querySelectorAll('.cou')
        let country = document.getElementById('country')
        country.innerText = this.args['meta']['country']
        stalinks.forEach(element => element.addEventListener("click", function () {
            let text = element.innerText
            country.innerText = text
        }))


        this.next_btn.addEventListener('click', ev => {

            var req_body = this.args['creds']
            req_body['required'] = {'document_type': 'LICENCE', 'country': 'IND', 'state': 'MH', "step": "DOCTYPE"}

            this.send_data("/azyo_api/", req_body, res => {
    
                if (res['status'] !== 'success') {
                    this.detail['success'] = false
                    this.detail['name'] = res['error']
                    this.detail['message'] = res['error_comment']
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
                else {
                    this.detail['success'] = true
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
            })
        })

    }

    distroy_view() {
        // var req_body = this.args['creds']
        // req_body['required'] = {'document_type': "LICENCE", 'country': 'IND', 'state': 'MH', "step": "DOCTYPE"}
        // this.send_data("/test_api/", req_body, res 
    }
}


class FrontsideView extends AzyoView {
    render_view(root_div) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        header.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Get your document's <strong>FRONT</strong> side ready</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`


        var body_title = document.createElement('h6')
        body_title.classList.add("azyo-modal-body-title")
        body_title.innerHTML = "Make sure your document is inside the frame"

        var video_container = document.createElement('div')
        video_container.classList.add("azyo_video_container")

        var video = document.createElement('video')
        this.video = video
        video.width = 640
        video.height = 480
        video.autoplay = "true"
        video.id = "azyo_vid"
        video.classList.add("azyo_videoElement")

        
        var flipcart = document.createElement('div')
        flipcart.setAttribute('class', "flip-card")
        flipcart.setAttribute('id', "allcard")
        flipcart.setAttribute('style', "position:absolute; opacity: 0.6; display: block;")
        flipcart.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img id = "frontpiccard" src="https://raw.githubusercontent.com/monacotime/azyo_embedded_viewport/main/cardfront.png" alt="Avatar" style="width:370px;height:250px;">
            </div>
        </div>
        `

        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Take Photo"
        this.next_btn = next_btn


        footer.insertBefore(next_btn, cc)

        video_container.append(flipcart, video)
        body.append(body_title, video_container)

        root_div.appendChild(wrapper)
    }

    init_view() {
        this.args['VideoUtils'].init_video(this.video)

        document.getElementById("allcard").style.display = "none";
        function hide() {
            document.getElementById("allcard").style.display = "none";
        }

        function disp(){
            document.getElementById('allcard').style.display = "block"
        }

        function rotates(){
            setTimeout(disp, 500);
            setTimeout(hide, 2500);
        }

        this.video.addEventListener('play', ev=> {
            rotates()
        })

        this.next_btn.addEventListener('click', ev => {

            var photo = this.args['VideoUtils'].takepicture(this.video)

            var req_body = this.args['creds']
            req_body['required'] = {"image": photo, "step": "FRONTSIDE"}
            this.send_data("/azyo_api/", req_body, res => {
                if (res['status'] !== 'success') {
                    this.detail['success'] = false
                    this.detail['name'] = res['error']
                    this.detail['message'] = res['error_comment']
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
                else {
                    this.detail['success'] = true
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
            })
        })
    
    }

    distroy_view() {
        this.args['VideoUtils'].distroy_video(this.video)
    }
}


class BacksideView extends AzyoView {
    render_view(root_div) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        var header = document.createElement('div')
        header.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Turn your ID card for capturing <strong>BACK</strong> side</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        var body_title = document.createElement('h6')
        body_title.classList.add("azyo-modal-body-title")
        body_title.innerHTML = "Make sure your document is inside the frame"

        var video_container = document.createElement('div')
        video_container.classList.add("azyo_video_container")

        var video = document.createElement('video')
        this.video = video
        video.width = 640
        video.height = 480
        video.autoplay = "true"
        video.id = "azyo_vid"
        video.classList.add("azyo_videoElement")

        var flipcart = document.createElement('div')
        flipcart.setAttribute('class', "flip-card")
        flipcart.setAttribute('id', "allcard")
        flipcart.setAttribute('style', "position:absolute; opacity: 0.6; display: block;")
        flipcart.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img id = "frontpiccard" src="https://raw.githubusercontent.com/monacotime/azyo_embedded_viewport/main/cardfront.png" alt="Avatar" style="width:370px;height:250px;">
            </div>
            <div class="flip-card-back">
                <img id = "backpiccard" src="https://raw.githubusercontent.com/monacotime/azyo_embedded_viewport/main/cardback.png" alt="Avatar" style="width:370px;height:250px;">
            </div>
        </div>
        `

        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Take Photo"
        this.next_btn = next_btn

        footer.insertBefore(next_btn, cc)

        video_container.append(flipcart, video)
        body.append(body_title, video_container)
        root_div.appendChild(wrapper)
    }

    init_view() {
        this.args['VideoUtils'].init_video(this.video)
        
        document.getElementById("allcard").style.display = "none";
        function animate() {
            var card = document.querySelector('.flip-card-inner');
            card.classList.toggle('is-flipped');
        }
        function hide() {
            document.getElementById("allcard").style.display = "none";
        }
        function disp(){
            document.getElementById('allcard').style.display = "block"
        }

        function rotates(){
            setTimeout(disp, 150)
            setTimeout(animate, 1000);
            setTimeout(hide, 3000);
        }

        this.video.addEventListener('play', ev=> {
            rotates()
        })

        this.next_btn.addEventListener('click', ev => {

            var photo = this.args['VideoUtils'].takepicture(this.video)

            var req_body = this.args['creds']
            req_body['required'] = {"image": photo, "step": "BACKSIDE"}

            this.send_data("/azyo_api/", req_body, res => {
                if (res['status'] !== 'success') {
                    this.detail['success'] = false
                    this.detail['name'] = res['error']
                    this.detail['message'] = res['error_comment']
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
                else {
                    this.detail['success'] = true
                    this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                }
            })
        })
    }

    distroy_view() {
        this.args['VideoUtils'].distroy_video(this.video)
    }

}


class ResultGenView extends AzyoView {
    render_view(root_div) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error
        this.footer = footer
        this.cc = cc

        var link = document.createElement('link')
        link.setAttribute('rel', 'stylesheet')
        link.setAttribute('href', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
        wrapper.insertBefore(link, content)

        header.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Processing your data</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        body.innerHTML = `
        <h6 class="azyo-modal-body-title">
                    Please wait while we analyse your images
                </h6>
                <div style="margin-left: 60px;">
                    <div>
                        <div class = "azyo-instr">
                            <i id = "ab" class="fa fa-circle-o-notch fa-spin"></i>
                            Processing Your Selfie
                        </div>
                    </div>
    
                    <div>
                        <div class = "azyo-instr">
                            <i id = "bb" class="fa fa-circle-o-notch fa-spin"></i>
                            Extracting Document Details
                        </div>
                    </div>

                    <div>
                        <div class = "azyo-instr">
                            <i id = "cb" class="fa fa-circle-o-notch fa-spin"></i>
                            Validating Results
                        </div>
                    </div>
                </div>
                <div style = "display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;">
                    <div class= "res_holder" >
                        <div class = "res_img_holder">
                            <img id = "img1" class = "azyo_res_img" src="" alt="" />
                            <img id = "img2" class = "azyo_res_img" src="" alt="" />
                        </div>
                        <div id = "azyo_res"></div>
                        <br>
                        Your KYC number is <span id = "kyc_no" style= "font-weight: bold;"></span>
                        </div>
                    </div>
                </div>
        `                
        var next_btn = document.createElement('button')
        this.next_btn = next_btn
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Thank You"

        footer.insertBefore(next_btn, cc)

        root_div.appendChild(wrapper)
    }

    init_view() {
        var a = document.getElementById("ab")
        var b = document.getElementById("bb")
        var c = document.getElementById("cb")
        
        var req_body = this.args['creds']
        req_body['required'] = {"step": "RESULTGEN"}
        this.send_data("/azyo_api/", req_body, res => {
            if (res['status'] !== 'success') {

                c.setAttribute("class", "fa fa-times")
                
                var res_div = document.getElementById("azyo_res")
                res_div.setAttribute("style", "color: red")
                res_div.innerHTML = "Document validation failed. Please Retry."

                this.detail['success'] = true
                this.detail['name'] = res['error']
                this.detail['message'] = res['error_comment']
                this.detail['to'] = 1
                this.detail['view'] = this
                this.detail['backto'] = "INITIALIZED"

                this.next_btn.innerHTML = "Retry"
                this.footer.insertBefore(this.next_btn, this.cc)


                this.next_btn.addEventListener('click', ev => {
                    this.next_btn.dispatchEvent(this.get_back_to_event(this.detail))
                })
            } else {
                this.detail['success'] = true

                var result = res["step_response"]

    
                document.getElementById("img1").setAttribute("src", result["selfie_img"])
                document.getElementById("img2").setAttribute("src", result["ocr_img"])
                var resz = result["match_status"].toUpperCase()
                var res_div = document.getElementById("azyo_res")

                if (resz == "TRUE"){
                    document.getElementById('kyc_no').innerHTML = result['kyc']
                    c.setAttribute("class", "fa fa-check")
                    var disp_res = "Face match confirmed"
                    res_div.setAttribute("style", "color: green")
                    
                    this.next_btn.innerHTML = "Thank You"
                    this.next_btn.setAttribute('data-dismiss', 'modal')
                    this.next_btn.setAttribute('aria-label', 'Close')
                    this.next_btn.addEventListener('click', ev => {
                        this.next_btn.dispatchEvent(this.get_next_event(this.detail))
                    })

                } else {
                    c.setAttribute("class", "fa fa-times")
                    var disp_res = "Faces did not match"
                    res_div.setAttribute("style", "color: red")
                    this.next_btn.innerHTML = "Retry"

                    this.detail['success'] = true
                    this.detail['name'] = res['error']
                    this.detail['message'] = res['error_comment']
                    this.detail['to'] = 1
                    this.detail['view'] = this
                    this.detail['backto'] = "INITIALIZED"

                    this.next_btn.addEventListener('click', ev => {
                        this.next_btn.dispatchEvent(this.get_back_to_event(this.detail))
                    })
                }

                res_div.innerHTML = disp_res
                
                this.footer.insertBefore(this.next_btn, this.cc)

            }
        })

        setTimeout(function() {
            a.setAttribute("class", "fa fa-check")
        }, 2000);
        setTimeout(function() {
            b.setAttribute("class", "fa fa-check")
        }, 2500);


    }
}


class ThankyouView extends AzyoView {
    render_view(root_div) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        header.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Thank You</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        body.innerHTML = "Your verification process is complete!"
        
        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.innerHTML = "Thank You"

        footer.insertBefore(next_btn, cc)

        root_div.appendChild(wrapper)
    }
}

class FineshedView extends AzyoView {
    render_view(root_div, args) {
        var [wrapper, content, header, body, footer, error, cc] = this.AVR.get_azyo_content()
        this.error = error

        header.innerHTML = `<h5 class="modal-title" id="exampleModalLabel">Verification Complete</h5>
        <button type="button" class="close azyo-close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>`

        body.innerHTML = `
        <div style="text-align:center;">
        Your azyo verification is complete here is your e-kyc number <b>` + args['kyc_number'] + `</b>
        </div>`
        
        var next_btn = document.createElement('button')
        next_btn.type="button"
        next_btn.classList.add('btn', 'btn-primary')
        next_btn.setAttribute('data-dismiss', 'modal')
        next_btn.setAttribute('aria-label', 'Close')
        next_btn.innerHTML = "Thank You"

        footer.insertBefore(next_btn, cc)

        root_div.appendChild(wrapper)
    }

    check_results(get=false) {
        var req_body = this.args['creds']
        req_body['required'] = {"step": "CHECK"}
        if (get) req_body['required']['operation'] = 'GETRESULTS'
        this.response = null
        this.send_data("/azyo_api/", req_body, res => {

            this.response = res['step_response']

        })
        
        return this.response
    }
}


//coindcx 
//binance
//shufty
//onfeedo
//varif

var jquery = document.createElement('script')
jquery.setAttribute('src', "https://code.jquery.com/jquery-3.6.0.js")
jquery.setAttribute('integrity', "sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=")
jquery.setAttribute('crossorigin', "anonymous")
document.getElementsByTagName('head')[0].appendChild(jquery)


class AzyoViewPort {
    #current = 0
    #ends = null
    #views = null

    finish_on = null

    constructor(root_div, client_code, user_name, meta, on_finish=null) {
        this.client_code = client_code
        this.user_name = user_name
        this.meta = meta
        this.on_finish(on_finish)

        this.#init_root(root_div)

        var view_args = {'creds': {'client_code': this.client_code, 'user_name': this.user_name}}
        this.finished = new FineshedView(view_args)
        this.index = {
            'INITIALIZED': 0,
            'SELFIE': 0,
            'DOCTYPE': 2,
            'FRONTSIDE': 3,
            'BACKSIDE': 4,
            'RESULTGEN': 5,
        }

        var response = this.finished.check_results()
        
        console.log("--->"+response);
        
        if (response['status'] === 'complete') {
            this.kyc_number = response['kyc_number']
            this.finished.render_view(this.root, {'kyc_number': this.kyc_number})
            this.finished.init_view()
            this.after_finish()
        }
        else {
console.log(response);
            
            var current_step = response['step']
            var current_index = this.index[current_step]
            this.register_views([
                [GreetingsView, {}],
                [SelfieView, {'VideoUtils': VideoUtils}],
                [DocTypeView, {}],
                [FrontsideView, {'VideoUtils': VideoUtils}],
                [BacksideView, {'VideoUtils': VideoUtils}],
                [ResultGenView, {}],
            ], (current_index===0)? true: false)
            console.log("current index="+current_index);
            if (current_index!==0) {
                this.init_view(current_index)
            }

        }
    }


    #init_root(root_div) {
        this.root = root_div
        this.root.addEventListener('next', ev=> {
            if (ev.detail['success']) this.next()
            else {
                console.log('Failed', ev.detail)
                ev.detail['view'].error_occured(ev.detail['name'], ev.detail['message'])
            }
        })
        
        this.root.addEventListener('backto', ev => {
            if (ev.detail['success']) {
                this.root.innerHTML = ""
                
                var view = ev.detail["view"]
                var payload = {
                    "step": "BACK",
                    "backto": "INITIALIZED"
                }

                var req_body = view.args['creds']
                req_body['required'] = payload

                view.send_data("/test_api/", req_body, res => {})

                this.init_view(ev.detail['to'])
            }
            else {
                console.log('Failed', ev.detail)
                ev.detail['view'].error_occured(ev.detail['name'], ev.detail['message'])
            }
        })
    }

    register_views(views, init_first=false) {
        var new_views = []
        views.forEach(view => {
            var View_Obj = view[0]
            var View_args = view[1]
            View_args['creds'] = {'client_code': this.client_code, 'user_name': this.user_name}
            View_args['meta'] = this.meta
            view = new View_Obj(View_args)
            if (!(view instanceof AzyoView)) {
                throw Error(view.constructor.name + ' is invalid')
            }
            new_views.push(view)
        });

        this.#views = new_views
        this.#ends = this.#views.length - 1
        
        if(init_first) {this.init_first_view()}
    }

    init_first_view() {
        this.init_view(0)
    }

    init_view(index) {
        if(this.finished_()) {
            this.after_finish()
        }
        this.#current = index

        var initialized_view = this.#views[index]
        this.#set_view(initialized_view)
    }
    
    islast_() { return ((this.#ends - 1) === this.#current)? true: false }
    finished_() { return (this.#ends === this.#current)? true: false}

    #do_this_on_finished() {
        this.#set_view(this.finished)
    }

    next() {
        if(this.finished_()) {
            this.after_finish()
        }
        else {
            this.#unset_view(this.#views[this.#current])

            var new_current = this.#current + 1
            var next_view = this.#views[new_current]
            this.#set_view(next_view)
            
            if (this.islast_()) {
                this.after_finish()
            }

            this.#current += 1
        }
    }

    after_finish() {
        var result = this.finished.check_results(true)['results']
        this.finish_on(result)
    }

    on_finish(do_something) {
        this.finish_on = do_something
    }

    #set_view(view) {
        view.render_view(this.root)
        view.init_view()
    }

    #unset_view(view) {
        this.root.innerHTML = ""
        view.distroy_view()
    }

}