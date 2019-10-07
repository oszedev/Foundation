(function(){tinymce.create("tinymce.plugins.Directionality",{init:function(c,a){var b=this;b.editor=c;c.addCommand("mceDirectionLTR",function(){var d=c.dom.getParent(c.selection.getNode(),c.dom.isBlock);if(d){if(c.dom.getAttrib(d,"dir")!="ltr"){c.dom.setAttrib(d,"dir","ltr");}else{c.dom.setAttrib(d,"dir","");}}c.nodeChanged();});c.addCommand("mceDirectionRTL",function(){var d=c.dom.getParent(c.selection.getNode(),c.dom.isBlock);if(d){if(c.dom.getAttrib(d,"dir")!="rtl"){c.dom.setAttrib(d,"dir","rtl");}else{c.dom.setAttrib(d,"dir","");}}c.nodeChanged();});c.addButton("ltr",{title:"directionality.ltr_desc",cmd:"mceDirectionLTR"});c.addButton("rtl",{title:"directionality.rtl_desc",cmd:"mceDirectionRTL"});c.onNodeChange.add(b._nodeChange,b);},getInfo:function(){return{longname:"Directionality",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/directionality",version:tinymce.majorVersion+"."+tinymce.minorVersion};},_nodeChange:function(e,c,b){var a=e.dom,d;b=a.getParent(b,a.isBlock);if(!b){c.setDisabled("ltr",1);c.setDisabled("rtl",1);return;}d=a.getAttrib(b,"dir");c.setActive("ltr",d=="ltr");c.setDisabled("ltr",0);c.setActive("rtl",d=="rtl");c.setDisabled("rtl",0);}});tinymce.PluginManager.add("directionality",tinymce.plugins.Directionality);})();