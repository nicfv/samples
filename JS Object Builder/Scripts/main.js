function Id() {
    const CONTENT = "content";
    const AUTHOR = "author";
    const VERSIONID = "version";
    const FORM = "form";
    const CONTROLS = "controls";
    const COLUMN = "col";
    const CODE = "code";
    const COPYRIGHT = "copyright";
    const PREFIX = "o";
    const PROP_PREFIX = "_prop";
    const FUNC_PREFIX = "_func";
    this.CONTENT_SUFFIX = "_content";
    this.CHECKBOX_SUFFIX = "_c";
    this.TEXTBOX_SUFFIX = "_t";
    this.BUTTON_SUFFIX = "_b";
    this.PARAM_SUFFIX = "_param";
    this.CONST_SUFFIX = "_const";
    this.READ_SUFFIX = "_read";
    this.WRITE_SUFFIX = "_write";
    this.NAME_SUFFIX = "_name";
    this.DEFAULT_SUFFIX = "_default";
    this.DELETE_SUFFIX = "_delete";
    this.ADD_SUFFIX = "_add";
    this.PUBLIC_SUFFIX = "_public";
    this.COMMENT_SUFFIX = "_comment"
    this.MIN_SUFFIX = "_compact";
    this.CASING_SUFFIX = "_case";
    this.TAB_SUFFIX = "_tab";
    this.BUILD_SUFFIX = "_build";

    let currentPropId = 0;
    let currentFuncId = 0;

    this.getPropId = (suffix, id) =>
        PREFIX + PROP_PREFIX + (id || id === 0 ? id : currentPropId) + (suffix || "");
    this.getPropClass = (suffix) =>
        PREFIX + PROP_PREFIX + (suffix || "");
    this.getFuncId = (suffix, id) =>
        PREFIX + FUNC_PREFIX + (id || id === 0 ? id : currentFuncId) + (suffix || "");
    this.getFuncClass = (suffix) =>
        PREFIX + FUNC_PREFIX + (suffix || "");

    this.getShortClass = (suffix) => PREFIX + (suffix || "");
    this.contentId = () => CONTENT;
    this.authorId = () => AUTHOR;
    this.versionId = () => VERSIONID;
    this.formId = () => FORM;
    this.controlsId = () => CONTROLS;
    this.columnId = () => COLUMN;
    this.codeId = () => CODE;
    this.copyrightId = () => COPYRIGHT;

    this.propId = () => currentPropId;
    this.funcId = () => currentFuncId;
    this.incrementPropId = () => { currentPropId++; };
    this.incrementFuncId = () => { currentFuncId++; };
}

function Form() {
    const AUTHOR_TEXT = "Created by Nicolas Ventura";
    const VERSION_TEXT = "JavaScript Object Builder v1.3"
    const CLASS_TEXT = "Class Name";
    const PARAM_LABEL = "Constructor";
    const CONST_LABEL = "Const";
    const READ_LABEL = "Getter";
    const WRITE_LABEL = "Setter";
    const PROPNAME_TEXT = "Property Name";
    const DEFAULT_TEXT = "Default Value";
    const PUBLIC_LABEL = "Public";
    const FUNCNAME_TEXT = "Method Name";
    const PARAM_TEXT = "Param1 = Optional Default\nParam2 = Optional Default\n...";
    const DELETE_BTN = "Remove";
    const PROPADD_BTN = "Add Property";
    const FUNCADD_BTN = "Add Method";
    const COMMENT_LABEL = "Annotate";
    const MIN_LABEL = "Compact";
    const CASING_LABEL = "Correct Casing";
    const TAB_LABEL = "Use Tabs";
    const BUILD_BTN = "Generate";
    const COPY_TEXT = "Copyright (c) 2020 Nicolas Ventura";

    const id = new Id();

    const body = document.getElementsByTagName("body")[0];
    const propDiv = document.createElement("div");
    const funcDiv = document.createElement("div");

    const props = [];
    const funcs = [];

    this.getProp = (i) => props[i];
    this.getFunc = (i) => funcs[i];
    this.getProps = () => props;
    this.getFuncs = () => funcs;

    this.addProp = () => {
        const mainDiv = document.createElement("div");
        mainDiv.id = id.getPropId();
        propDiv.appendChild(mainDiv);
        props.push(mainDiv);

        const contentDiv = document.createElement("div");
        contentDiv.className = id.getPropClass(id.CONTENT_SUFFIX);
        mainDiv.appendChild(contentDiv);

        const cbDiv = document.createElement("div");
        cbDiv.className = id.getPropClass(id.CHECKBOX_SUFFIX);
        contentDiv.appendChild(cbDiv);

        const col1Div = document.createElement("div");
        col1Div.className = id.columnId();
        cbDiv.appendChild(col1Div);

        const paramCb = document.createElement("input");
        paramCb.id = id.getPropId(id.PARAM_SUFFIX);
        paramCb.type = "checkbox";
        col1Div.appendChild(paramCb);

        const paramLabel = document.createElement("label");
        paramLabel.htmlFor = paramCb.id;
        paramLabel.innerHTML = PARAM_LABEL;
        col1Div.appendChild(paramLabel);

        const br1 = document.createElement("br");
        col1Div.appendChild(br1);

        const constCb = document.createElement("input");
        constCb.id = id.getPropId(id.CONST_SUFFIX);
        constCb.type = "checkbox";
        col1Div.appendChild(constCb);

        const constLabel = document.createElement("label");
        constLabel.htmlFor = constCb.id;
        constLabel.innerHTML = CONST_LABEL;
        col1Div.appendChild(constLabel);

        const col2Div = document.createElement("div");
        col2Div.className = id.columnId();
        cbDiv.appendChild(col2Div);

        const readCb = document.createElement("input");
        readCb.id = id.getPropId(id.READ_SUFFIX);
        readCb.type = "checkbox";
        col2Div.appendChild(readCb);

        const readLabel = document.createElement("label");
        readLabel.htmlFor = readCb.id;
        readLabel.innerHTML = READ_LABEL;
        col2Div.appendChild(readLabel);

        const br2 = document.createElement("br");
        col2Div.appendChild(br2);

        const writeCb = document.createElement("input");
        writeCb.id = id.getPropId(id.WRITE_SUFFIX);
        writeCb.type = "checkbox";
        col2Div.appendChild(writeCb);

        const writeLabel = document.createElement("label");
        writeLabel.htmlFor = writeCb.id;
        writeLabel.innerHTML = WRITE_LABEL;
        col2Div.appendChild(writeLabel);

        const textDiv = document.createElement("div");
        textDiv.className = id.getPropClass(id.TEXTBOX_SUFFIX);
        contentDiv.appendChild(textDiv);

        const nameText = document.createElement("input");
        nameText.id = id.getPropId(id.NAME_SUFFIX);
        nameText.className = id.getPropClass(id.NAME_SUFFIX);
        nameText.type = "text";
        nameText.placeholder = PROPNAME_TEXT;
        textDiv.appendChild(nameText);

        const defaultText = document.createElement("input");
        defaultText.id = id.getPropId(id.DEFAULT_SUFFIX);
        defaultText.className = id.getPropClass(id.DEFAULT_SUFFIX);
        defaultText.type = "text";
        defaultText.placeholder = DEFAULT_TEXT;
        textDiv.appendChild(defaultText);

        const btnDiv = document.createElement("div");
        btnDiv.className = id.getPropClass(id.BUTTON_SUFFIX);
        contentDiv.appendChild(btnDiv);

        const deleteBtn = document.createElement("button");
        deleteBtn.id = id.getPropId(id.DELETE_SUFFIX);
        deleteBtn.className = id.propId();
        deleteBtn.innerHTML = DELETE_BTN;
        deleteBtn.addEventListener("click", (e) => {
            props[deleteBtn.className].remove();
            props[deleteBtn.className] = null;
        }, false);
        btnDiv.appendChild(deleteBtn);

        id.incrementPropId();
    };

    this.addFunc = () => {
        const mainDiv = document.createElement("div");
        mainDiv.id = id.getFuncId();
        funcDiv.appendChild(mainDiv);
        funcs.push(mainDiv);

        const contentDiv = document.createElement("div");
        contentDiv.className = id.getFuncClass(id.CONTENT_SUFFIX);
        mainDiv.appendChild(contentDiv);

        const cbDiv = document.createElement("div");
        cbDiv.className = id.getFuncClass(id.CHECKBOX_SUFFIX);
        contentDiv.appendChild(cbDiv);

        const col1Div = document.createElement("div");
        col1Div.className = id.columnId();
        cbDiv.appendChild(col1Div);

        const publicCb = document.createElement("input");
        publicCb.id = id.getFuncId(id.PUBLIC_SUFFIX);
        publicCb.type = "checkbox";
        col1Div.appendChild(publicCb);

        const publicLabel = document.createElement("label");
        publicLabel.htmlFor = publicCb.id;
        publicLabel.innerHTML = PUBLIC_LABEL;
        col1Div.appendChild(publicLabel);

        const textDiv = document.createElement("div");
        textDiv.className = id.getFuncClass(id.TEXTBOX_SUFFIX);
        contentDiv.appendChild(textDiv);

        const nameText = document.createElement("input");
        nameText.id = id.getFuncId(id.NAME_SUFFIX);
        nameText.className = id.getFuncClass(id.NAME_SUFFIX);
        nameText.type = "text";
        nameText.placeholder = FUNCNAME_TEXT;
        textDiv.appendChild(nameText);

        const br = document.createElement("br");
        textDiv.appendChild(br);

        const paramText = document.createElement("textarea");
        paramText.id = id.getFuncId(id.PARAM_SUFFIX);
        paramText.className = id.getFuncClass(id.PARAM_SUFFIX);
        paramText.placeholder = PARAM_TEXT;
        textDiv.appendChild(paramText);

        const btnDiv = document.createElement("div");
        btnDiv.className = id.getFuncClass(id.BUTTON_SUFFIX);
        contentDiv.appendChild(btnDiv);

        const deleteBtn = document.createElement("button");
        deleteBtn.id = id.getFuncId(id.DELETE_SUFFIX);
        deleteBtn.className = id.funcId();
        deleteBtn.innerHTML = DELETE_BTN;
        deleteBtn.addEventListener("click", (e) => {
            funcs[deleteBtn.className].remove();
            funcs[deleteBtn.className] = null;
        }, false);
        btnDiv.appendChild(deleteBtn);

        id.incrementFuncId();
    };

    const init = () => {
        const contentDiv = document.createElement("div");
        contentDiv.className = id.contentId();
        body.appendChild(contentDiv);

        const formDiv = document.createElement("div");
        formDiv.className = id.formId();
        contentDiv.appendChild(formDiv);

        const authorDiv = document.createElement("div");
        authorDiv.className = id.authorId();
        authorDiv.innerHTML = AUTHOR_TEXT;
        formDiv.appendChild(authorDiv);

        const versionDiv = document.createElement("div");
        versionDiv.className = id.versionId();
        versionDiv.innerHTML = VERSION_TEXT;
        formDiv.appendChild(versionDiv);

        const classDiv = document.createElement("div");
        classDiv.className = id.getShortClass(id.NAME_SUFFIX);
        formDiv.appendChild(classDiv);

        const className = document.createElement("input");
        className.id = id.getShortClass(id.NAME_SUFFIX);
        className.type = "text";
        className.placeholder = CLASS_TEXT;
        classDiv.appendChild(className);

        propDiv.className = id.getPropClass();
        formDiv.appendChild(propDiv);

        const propControls = document.createElement("div");
        propControls.className = id.controlsId();
        formDiv.appendChild(propControls);

        const propAdd = document.createElement("button");
        propAdd.id = id.getPropClass(id.ADD_SUFFIX);
        propAdd.innerHTML = PROPADD_BTN;
        propAdd.addEventListener("click", () => {
            this.addProp();
        }, false);
        propControls.appendChild(propAdd);

        funcDiv.className = id.getFuncClass();
        formDiv.appendChild(funcDiv);

        const funcControls = document.createElement("div");
        funcControls.className = id.controlsId();
        formDiv.appendChild(funcControls);

        const funcAdd = document.createElement("button");
        funcAdd.id = id.getFuncClass(id.ADD_SUFFIX);
        funcAdd.innerHTML = FUNCADD_BTN;
        funcAdd.addEventListener("click", () => {
            this.addFunc();
        }, false);
        funcControls.appendChild(funcAdd);

        const buildControls = document.createElement("div");
        buildControls.className = id.controlsId();
        formDiv.appendChild(buildControls);

        const cbBuildDiv = document.createElement("div");
        cbBuildDiv.className = id.getShortClass(id.CHECKBOX_SUFFIX);
        buildControls.appendChild(cbBuildDiv);

        const col1Div = document.createElement("div");
        col1Div.className = id.columnId();
        cbBuildDiv.appendChild(col1Div);

        const commentCb = document.createElement("input");
        commentCb.id = id.getShortClass(id.COMMENT_SUFFIX);
        commentCb.type = "checkbox";
        col1Div.appendChild(commentCb);

        const commentLabel = document.createElement("label");
        commentLabel.htmlFor = commentCb.id;
        commentLabel.innerHTML = COMMENT_LABEL;
        col1Div.appendChild(commentLabel);

        const br1 = document.createElement("br");
        col1Div.appendChild(br1);

        const minCb = document.createElement("input");
        minCb.id = id.getShortClass(id.MIN_SUFFIX);
        minCb.type = "checkbox";
        col1Div.appendChild(minCb);

        const minLabel = document.createElement("label");
        minLabel.htmlFor = minCb.id;
        minLabel.innerHTML = MIN_LABEL;
        col1Div.appendChild(minLabel);

        const col2Div = document.createElement("div");
        col2Div.className = id.columnId();
        cbBuildDiv.appendChild(col2Div);

        const casingCb = document.createElement("input");
        casingCb.id = id.getShortClass(id.CASING_SUFFIX);
        casingCb.type = "checkbox";
        col2Div.appendChild(casingCb);

        const casingLabel = document.createElement("label");
        casingLabel.htmlFor = casingCb.id;
        casingLabel.innerHTML = CASING_LABEL;
        col2Div.appendChild(casingLabel);

        const br2 = document.createElement("br");
        col2Div.appendChild(br2);

        const tabCb = document.createElement("input");
        tabCb.id = id.getShortClass(id.TAB_SUFFIX);
        tabCb.type = "checkbox";
        col2Div.appendChild(tabCb);

        const tabLabel = document.createElement("label");
        tabLabel.htmlFor = tabCb.id;
        tabLabel.innerHTML = TAB_LABEL;
        col2Div.appendChild(tabLabel);

        const btnBuildDiv = document.createElement("div");
        btnBuildDiv.className = id.getShortClass(id.BUTTON_SUFFIX);
        buildControls.appendChild(btnBuildDiv);

        const buildBtn = document.createElement("button");
        buildBtn.id = id.getFuncClass(id.BUILD_SUFFIX);
        buildBtn.innerHTML = BUILD_BTN;
        buildBtn.addEventListener("click", (e) => {
            new Code(this).render();
        }, false);
        btnBuildDiv.appendChild(buildBtn);

        const codeDiv = document.createElement("div");
        codeDiv.id = id.codeId();
        codeDiv.addEventListener("click", (e) => {
            const copyright = document.createElement("span");
            copyright.className = id.copyrightId();
            copyright.innerText = "// " + COPY_TEXT + "\n";
            codeDiv.insertBefore(copyright, codeDiv.firstChild);
            window.getSelection().selectAllChildren(codeDiv);
            document.execCommand("copy");
            window.getSelection().empty();
            codeDiv.removeChild(copyright);
        }, false);
        contentDiv.appendChild(codeDiv);
    };
    init();
}

function Case() {
    const split = (s) => s.toString().trim().split(" ");

    this.lowerCamel = (s) => {
        let str = "";
        const words = split(s);
        for(let i = 0; i < words.length; i++) {
            if(words[i]) {
                if(i === 0) {
                    str += words[i].toLowerCase();
                } else {
                    str += words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
                }
            }
        }
        return str;
    };

    this.upperCamel = (s) => {
        let str = "";
        const words = split(s);
        for(let i = 0; i < words.length; i++) {
            if(words[i]) {
                str += words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
            }
        }
        return str;
    };

    this.constCase = (s) => {
        let str = "";
        const words = split(s);
        for(let i = 0; i < words.length; i++) {
            if(words[i]) {
                if(i > 0) {
                    str += "_";
                }
                str += words[i].toUpperCase();
            }
        }
        return str;
    };
}

function Prop(param, constnt, read, write, propname, defaultval) {
    const _param = !!param;
    const _constnt = !!constnt;
    const _read = !!read;
    const _write = !!write;
    const _propname = propname.toString();
    let   _defaultval = defaultval.toString();

    this.NORMAL_TYPE = "normal";
    this.PARAM_TYPE = "param";
    this.DEFAULT_TYPE = "default";
    this.GET_TYPE = "get";
    this.SET_TYPE = "set";
    this.NEW_TYPE = "new";

    const casing = new Case();

    const init = () => {
        _defaultval = _defaultval.trim();
        if(_defaultval.length > 0) {
            if(_defaultval.includes(" ") && _defaultval[0] !== '"' && _defaultval[0] !== "'") {
                _defaultval.replace('"', '\"');
                _defaultval = '"' + defaultval + '"';
            }
        }
    };
    init();

    this.param = () => _param;
    this.constnt = () => _constnt;
    this.read = () => _read;
    this.write = () => _write;
    this.name = (type, proper) => {
        if(type === this.NORMAL_TYPE) {
            if(proper) {
                if(_constnt) {
                    return casing.constCase(_propname);
                } else {
                    return "_" + casing.lowerCamel(_propname);
                }
            } else {
                return "_" + _propname;
            }
        } else if(type === this.PARAM_TYPE) {
            if(proper) {
                return casing.lowerCamel(_propname);
            } else {
                return _propname;
            }
        } else {
            if(proper) {
                return type + casing.upperCamel(_propname);
            } else {
                return type + _propname[0].toUpperCase() + _propname.substr(1);
            }
        }
    };
    this.default = () => _defaultval;
}

function Func(publicfunc, funcname, params) {
    const _publicfunc = !!publicfunc;
    const _funcname = funcname.toString();
    const _params = [];
    const _defaultvals = [];

    const casing = new Case();

    const init = () => {
        const lines = params.toString().trim().split("\n");
        for(let i = 0; i < lines.length; i++) {
            if(lines[i]) {
                // Expectation: paramName = defaultValue
                const pair = lines[i].split("=");
                if(pair.length === 1) {
                    _params.push(pair[0].trim());
                    _defaultvals.push(null);
                } else if(pair.length === 2) {
                    _params.push(pair[0].trim());
                    const defaultval = pair[1].trim();
                    if(defaultval.length > 0) {
                        if(defaultval.includes(" ") && defaultval[0] !== '"' && defaultval[0] !== "'") {
                            defaultval.replace('"', '\"');
                            _defaultvals.push('"' + defaultval + '"');
                        } else {
                            _defaultvals.push(defaultval);
                        }
                    } else {
                        _defaultvals.push(null);
                        console.warn("Missing parameter for '" + pair[0].trim() + "'.");
                    }
                } else {
                    console.warn("Incorrect parameter under method '" + _funcname + "'.");
                }
            }
        }
        if(_params.length !== _defaultvals.length) {
            console.warn("Amount of parameters does not match amount of default values.");
        }
    };
    init();

    this.publicfunc = () => _publicfunc;
    this.name = (proper) => {
        if(proper) {
            return casing.lowerCamel(_funcname);
        }
        return _funcname;
    };
    this.params = (proper) => {
        if(proper) {
            const _paramsProper = [];
            for(let i = 0; i < _params.length; i++) {
                _paramsProper.push(casing.lowerCamel(_params[i]));
            }
            return _paramsProper;
        }
        return _params;
    };
    this.defaults = () => _defaultvals;
}

function FormReader(formToRead) {
    const id = new Id();
    const casing = new Case();
    const form = formToRead;
    let className = "";
    let comments = false;
    let min = false;
    let ccasing = false;
    let tabs = false;
    const props = [];
    const funcs = [];

    const getValue = (elementId) => {
        const el = document.getElementById(elementId);
        if(el.tagName.toUpperCase() === "INPUT") {
            if(el.type.toUpperCase() === "TEXT") {
                return el.value;
            } else if(el.type.toUpperCase() === "CHECKBOX") {
                return el.checked;
            }
        } else if(el.tagName.toUpperCase() === "TEXTAREA") {
            return el.value;
        }
        console.warn("No value found for element '" + elementId + "'.");
    };

    const init = () => {
        className = getValue(id.getShortClass(id.NAME_SUFFIX));
        comments = getValue(id.getShortClass(id.COMMENT_SUFFIX));
        min = getValue(id.getShortClass(id.MIN_SUFFIX));
        ccasing = getValue(id.getShortClass(id.CASING_SUFFIX));
        tabs = getValue(id.getShortClass(id.TAB_SUFFIX));
        for(let i = 0; i < form.getProps().length; i++) {
            if(form.getProp(i)) {
                props.push(new Prop(
                    getValue(id.getPropId(id.PARAM_SUFFIX, i)),
                    getValue(id.getPropId(id.CONST_SUFFIX, i)),
                    getValue(id.getPropId(id.READ_SUFFIX, i)),
                    getValue(id.getPropId(id.WRITE_SUFFIX, i)),
                    getValue(id.getPropId(id.NAME_SUFFIX, i)),
                    getValue(id.getPropId(id.DEFAULT_SUFFIX, i))
                ));
            }
        }
        for(let i = 0; i < form.getFuncs().length; i++) {
            if(form.getFunc(i)) {
                funcs.push(new Func(
                    getValue(id.getFuncId(id.PUBLIC_SUFFIX, i)),
                    getValue(id.getFuncId(id.NAME_SUFFIX, i)),
                    getValue(id.getFuncId(id.PARAM_SUFFIX, i))
                ));
            }
        }
    };
    init();

    this.getName = () => {
        if(ccasing) {
            return casing.upperCamel(className);
        }
        return className;
    };
    this.hasComments = () => comments;
    this.isMin = () => min;
    this.correctCasing = () => ccasing;
    this.usesTabs = () => tabs;
    this.getProp = (i) => props[i];
    this.getFunc = (i) => funcs[i];
    this.getProps = () => props;
    this.getFuncs = () => funcs;
}

function Code(formToRead) {
    const id = new Id();
    const casing = new Case();
    const reader = new FormReader(formToRead);
    const codeDiv = document.getElementById(id.codeId());

    const KEY_CLASS = "key";
    const NUMBER_CLASS = "number";
    const STRING_CLASS = "string";
    const COMMENT_CLASS = "comment";
    const VAR_CLASS = "var";
    const VAL_CLASS = "val";
    const FUNC_CLASS = "function";
    const SPACE_PER_TAB = reader.isMin() ? 2 : 4;

    this.render = () => {
        codeDiv.innerHTML = '';
        annotateClass();
        printSpan(KEY_CLASS, "function");
        printSpace();
        printName();
        printParams();
        optionalSpace();
        printAny("{");
        newLine();
        printDefaults();
        optionalNewLine();
        printProps();
        optionalNewLine();
        printGetters();
        optionalNewLine();
        printSetters();
        optionalNewLine();
        printFuncs();
        optionalNewLine();
        printAny("}");
    };

    const isNumeric = (n) => !isNaN(+n);
    const printAny = (s) => { codeDiv.innerHTML += s; }
    const getSpan = (htmlClass, innerText) => '<span'+(htmlClass ? ' class="'+htmlClass+'">' : '>')+innerText+'</span>';
    const printSpan = (htmlClass, innerText) => { printAny(getSpan(htmlClass, innerText)); };
    const printSpace = (n) => {
        n = n || 1;
        for(let i = 0; i < n; i++) {
            printAny(" ");
        }
    };
    const optionalSpace = () => {
        if(!reader.isMin()) {
            printSpace();
        }
    };
    const newLine = (n) => {
        n = n || 1;
        for(let i = 0; i < n; i++) {
            printAny("\n");
        }
    };
    const optionalNewLine = () => {
        if(!reader.isMin()) {
            newLine();
        }
    };
    const printTab = (n) => {
        n = n || 1;
        for(let i = 0; i < n; i++) {
            if(reader.usesTabs()) {
                printAny("\t");
            } else {
                printSpace(SPACE_PER_TAB);
            }
        }
    };
    const commentBegin = (tabs) => {
        printTab(tabs);
        printSpan(COMMENT_CLASS, "/**");
        newLine();
    };
    const commentContinue = (tabs, content) => {
        printTab(tabs);
        printSpan(COMMENT_CLASS, " * " + content);
        newLine();
    };
    const commentEnd = (tabs) => {
        printTab(tabs);
        printSpan(COMMENT_CLASS, " */");
        newLine();
    };
    const printComment = (tabs, content, forceMultiLine) => {
        if(reader.hasComments()) {
            const lines = content.split("\n");
            if(lines.length > 1 || forceMultiLine) {
                commentBegin(tabs);
                for(let i = 0; i < lines.length; i++) {
                    commentContinue(tabs, lines[i]);
                }
                commentEnd(tabs);
            } else if(lines.length === 1) {
                printTab(tabs);
                printSpan(COMMENT_CLASS, "// " + lines[0]);
            }
        }
    };
    const printValue = (val) => {
        if(isNumeric(val)) {
            printSpan(NUMBER_CLASS, +val)
        } else if(val[0] === '"' || val[0] === "'") {
            printSpan(STRING_CLASS, val);
        } else {
            printSpan(VAR_CLASS, val);
        }
    };
    const printName = () => {
        printSpan(null, reader.getName());
    };
    const nParams = () => {
        let x = 0;
        for(let i = 0; i < reader.getProps().length; i++) {
            if(reader.getProp(i).param()) {
                x++;
            }
        }
        return x;
    };
    const printParams = () => {
        let x = 0;
        const n = nParams();
        printAny("(");
        if(n > 0) {
            for(let i = 0; i < reader.getProps().length; i++) {
                const currProp = reader.getProp(i);
                if(currProp.param()) {
                    printSpan(VAR_CLASS, currProp.name(currProp.PARAM_TYPE, reader.correctCasing()));
                    x++;
                    if(x < n) {
                        printAny(",");
                        optionalSpace();
                    }
                }
            }
        }
        printAny(")");
    };
    const annotateClass = () => {
        if(reader.hasComments()) {
            let comment = reader.getName();
            const n = nParams();
            if(n > 0) {
                for(let i = 0; i < reader.getProps().length; i++) {
                    const currProp = reader.getProp(i);
                    if(currProp.param()) {
                        comment += "\n";
                        comment += "@param " + currProp.name(currProp.PARAM_TYPE, reader.correctCasing());
                        const defaultval = currProp.default();
                        if(defaultval && defaultval.length > 0) {
                            comment += " default = " + defaultval;
                        }
                    }
                }
            }
            printComment(-1, comment, true);
        }
    };
    const printDefaults = () => {
        for(let i = 0; i < reader.getProps().length; i++) {
            const currProp = reader.getProp(i);
            const defaultval = currProp.default();
            if(defaultval && currProp.param()) {
                printTab();
                printSpan(KEY_CLASS, "const");
                printSpace();
                printSpan(VAR_CLASS, currProp.name(currProp.DEFAULT_TYPE, reader.correctCasing()));
                optionalSpace();
                printAny("=");
                optionalSpace();
                printValue(defaultval);
                printAny(";");
                newLine();
            }
        }
    };
    const printProps = () => {
        for(let i = 0; i < reader.getProps().length; i++) {
            const currProp = reader.getProp(i);
            printTab();
            if(currProp.constnt()) {
                printSpan(KEY_CLASS, "const");
            } else {
                printSpan(KEY_CLASS, "let");
            }
            printSpace();
            printSpan(VAR_CLASS, currProp.name(currProp.NORMAL_TYPE, reader.correctCasing()));
            const defaultval = currProp.default();
            if(currProp.param() || defaultval) {
                optionalSpace();
                printAny("=");
                optionalSpace();
            }
            if(currProp.param() && defaultval) {
                printSpan(VAR_CLASS, currProp.name(currProp.PARAM_TYPE, reader.correctCasing()));
                optionalSpace();
                printAny("===");
                optionalSpace();
                printSpan(VAL_CLASS, "undefined");
                optionalSpace();
                printAny("?");
                optionalSpace();
                printSpan(VAR_CLASS, currProp.name(currProp.DEFAULT_TYPE, reader.correctCasing()));
                optionalSpace();
                printAny(":");
                optionalSpace();
                printSpan(VAR_CLASS, currProp.name(currProp.PARAM_TYPE, reader.correctCasing()));
            } else if(currProp.param()) {
                printSpan(VAR_CLASS, currProp.name(currProp.PARAM_TYPE, reader.correctCasing()));
            } else if(defaultval) {
                printValue(defaultval);
            }
            printAny(";");
            newLine();
        }
    };
    const annotateGetter = (currProp) => {
        printComment(1, reader.getName() + "." + currProp.name(currProp.GET_TYPE, reader.correctCasing()) + "\n" +
            "@returns the value of " + currProp.name(currProp.PARAM_TYPE, reader.correctCasing()), true);
    };
    const printGetters = () => {
        for(let i = 0; i < reader.getProps().length; i++) {
            const currProp = reader.getProp(i);
            if(currProp.read()) {
                annotateGetter(currProp);
                printTab();
                printSpan(KEY_CLASS, "this");
                printAny(".");
                printSpan(FUNC_CLASS, currProp.name(currProp.GET_TYPE, reader.correctCasing()));
                optionalSpace();
                printAny("=");
                optionalSpace();
                printAny("()");
                optionalSpace();
                printAny("=>");
                optionalSpace();
                printSpan(VAR_CLASS, currProp.name(currProp.NORMAL_TYPE, reader.correctCasing()));
                printAny(";");
                newLine();
            }
        }
    };
    const annotateSetter = (currProp) => {
        printComment(1, reader.getName() + "." + currProp.name(currProp.SET_TYPE, reader.correctCasing()) + "\n" +
            "Modifies the value of " + currProp.name(currProp.PARAM_TYPE, reader.correctCasing()) + "\n" +
            "@param " + currProp.name(currProp.PARAM_TYPE, reader.correctCasing()), true);
    };
    const printSetters = () => {
        for(let i = 0; i < reader.getProps().length; i++) {
            const currProp = reader.getProp(i);
            if(currProp.write()) {
                if(currProp.constnt()) {
                    console.warn("Calling " + currProp.name(currProp.SET_TYPE, reader.correctCasing()) + "(...) will fail because " +
                        currProp.name(currProp.NORMAL_TYPE, reader.correctCasing()) + " is a constant.");
                }
                annotateSetter(currProp);
                printTab();
                printSpan(KEY_CLASS, "this");
                printAny(".");
                printSpan(FUNC_CLASS, currProp.name(currProp.SET_TYPE, reader.correctCasing()));
                optionalSpace();
                printAny("=");
                optionalSpace();
                printAny("(");
                printSpan(VAR_CLASS, currProp.name(currProp.PARAM_TYPE, reader.correctCasing()));
                printAny(")");
                optionalSpace();
                printAny("=>");
                optionalSpace();
                printAny("{");
                optionalSpace();
                printSpan(VAR_CLASS, currProp.name(currProp.NORMAL_TYPE, reader.correctCasing()));
                optionalSpace();
                printAny("=");
                optionalSpace();
                printSpan(VAR_CLASS, currProp.name(currProp.PARAM_TYPE, reader.correctCasing()));
                printAny(";");
                optionalSpace();
                printAny("};");
                newLine();
            }
        }
    };
    const annotateFunc = (currFunc) => {
        if(reader.hasComments()) {
            let comment = "";
            if(currFunc.publicfunc()) {
                comment += reader.getName() + ".";
            } else {
                comment += "(private) ";
            }
            comment += currFunc.name(reader.correctCasing());
            for(let i = 0; i < currFunc.params().length; i++) {
                const currParam = currFunc.params(reader.correctCasing())[i];
                const currDefault = currFunc.defaults()[i];
                comment += "\n";
                comment += "@param " + currParam;
                if(currDefault) {
                    comment += " default = " + currDefault;
                }
            }
            printComment(1, comment, true);
        }
    };
    const printFuncParams = (currFunc) => {
        let x = 0;
        printAny("(");
        for(let i = 0; i < currFunc.params().length; i++) {
            const currParam = currFunc.params(reader.correctCasing())[i];
            printSpan(VAR_CLASS, currParam);
            x++;
            if(x < currFunc.params().length) {
                printAny(",");
                optionalSpace();
            }
        }
        printAny(")");
    };
    const printFuncProps = (currFunc) => {
        for(let i = 0; i < currFunc.params().length; i++) {
            const currParam = currFunc.params(reader.correctCasing())[i];
            const currDefault = currFunc.defaults()[i];
            if(currDefault) {
                printTab(2);
                printSpan(VAR_CLASS, currParam);
                optionalSpace();
                printAny("=");
                optionalSpace();
                printSpan(VAR_CLASS, currParam);
                optionalSpace();
                printAny("===");
                optionalSpace();
                printSpan(VAL_CLASS, "undefined");
                optionalSpace();
                printAny("?");
                optionalSpace();
                printValue(currDefault);
                optionalSpace();
                printAny(":");
                optionalSpace();
                printSpan(VAR_CLASS, currParam);
                printAny(";");
                newLine();
            }
        }
        printComment(2, "TODO: " + currFunc.name(reader.correctCasing()) + " implementation");
    };
    const printFuncs = () => {
        for(let i = 0; i < reader.getFuncs().length; i++) {
            const currFunc = reader.getFunc(i);
            annotateFunc(currFunc);
            printTab();
            if(currFunc.publicfunc()) {
                printSpan(KEY_CLASS, "this");
                printAny(".");
            } else {
                printSpan(KEY_CLASS, "const");
                printSpace();
            }
            printSpan(FUNC_CLASS, currFunc.name(reader.correctCasing()));
            optionalSpace();
            printAny("=");
            optionalSpace();
            printFuncParams(currFunc);
            optionalSpace();
            printAny("=>");
            optionalSpace();
            printAny("{");
            newLine();
            printFuncProps(currFunc);
            newLine();
            printTab();
            printAny("};");
            newLine();
            optionalNewLine();
        }
    };
}

new Form();
