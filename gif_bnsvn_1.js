        .custom-breadcrumb {
            position: relative;
            z-index: 2;
        }
        .notice {
            margin-left: 325px;
        }

        div.sidebar-container {
            width: 310px;
            border-color: #292929;
            box-shadow: 2px 5px 7px rgba(0,0,0,.5);
            background-color:#fbfdff;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            padding-top: 41px;
        }
        div.sidebar {
            position: fixed;
            width: inherit;
            padding: 0 2px;
        }
        div.gif-full {
            margin-left: 315px;
            margin-bottom :25px;
            padding: 0 10px;
        }
        div.gif-full img {
            margin: auto;
        }
        div.gif-full a {
            display: inline-block;
            margin-top: 10px;
        }
        div.main-container {
            display: flex;
            flex-flow: column;
            padding: 0 10px;
            margin-left: 315px;
        }
        div.main-container > div {
            box-sizing: border-box;
            width: 100%;
            max-width: 1000px;
            margin: auto;
        }
        div.main-container > div + div {
            margin-top: 25px;
        }
        div.sidebar-section-header {
            overflow: hidden;
            text-align: center;
            font-size:18px;
            font-weight:bolder;
            margin: 18px 0 6px;
        }
        div.sidebar-section-header:before,
        div.sidebar-section-header:after {
            background-color: #000;
            content: "";
            display: inline-block;
            height: 2px;
            position: relative;
            vertical-align: middle;
            width: 50%;
        }
        div.sidebar-section-header:before {
            right: 0.5em;
            margin-left: -50%;
        }
        div.sidebar-section-header:after {
            left: 0.5em;
            margin-right: -50%;
        }
        td.about-left {
            width:50%;
            text-align:right;
            vertical-align:middle !important;
            font-weight: 700;
        }
        a#resolution-link {
            text-decoration: none;
            color: inherit;
        }
        #list_tags {
            overflow-y: auto;
            overflow-x: hidden;
            max-height: 75px;
        }
        #list_tags, #new_tags {
            margin-top: 5px;
        }
        #list_tags > div {
            display:inline-block;
            font-weight:bold;
            padding-bottom:7px;
        }
        #list_tags .well {
            padding:4px 6px;
            margin:2px;
            display:inline-block;
            font-weight: 500;
        }
        #list_tags .well .glyphicon {
            color: red;
        }
        #new_tags {
            display: inline-block;
        }
        #new_tags input {
            width:245px;
        }
        #new_tags button {
            width: auto;
        }
        .dropdown-menu > li > a {
            padding: 3px 10px;;
        }
        .dropdown-menu > li + li {
            border-top: 1px solid #ddd;
        }

        #prev_next_links {
            padding: 10px 6px;
            border-radius: 4px 4px 0 0;
            background-image: linear-gradient(to bottom, white, transparent);
            margin: auto;
        }
        .floatleft {
            float: left;
        }
        .floatright {
            float: right;
        }
        .author-tr, .author-tr:hover {
            background-color:#d0ded0 !important;
        }

        @media (max-width:800px), (max-height:820px) {

            #page_container {
                display:flex;
                flex-flow:column;
            }
            div.sidebar-container {
                width: 98%;
                max-width: 1000px;
                height:auto;
                order:2;
                margin: 10px auto 20px;
                position:inherit;
                border-radius:6px;
                overflow:inherit;
                padding: 0 6px;
            }
            div.sidebar {
                position: inherit;
                margin-top: 0 !important;
            }
            .notice {
                margin-left: 10px;
            }
            div.gif-full {
                margin-left:0px;
                order:1;
            }
            div.main-container {
                order:3;
                margin-left:0px;
            }
            #list_tags {
                max-height: 100%;
            }
        }

        .media-icon {
            text-decoration: none;
        }
        #wallpaper_source, #recrop_links {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
        #wallpaper_source div:last-child {
            flex: 1 1 400px;
            padding: 10px;
        }
        #recrop_links {
            margin: 10px 0;
        }
        #recrop_links a {
            flex: 1 1 185px;
            margin: 5px 0;
        }

        #confirmDelete .modal-footer > *{
            max-width: 48%;
            width: 100%;
            display: inline-block;
        }
