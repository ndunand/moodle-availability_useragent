YUI.add("moodle-availability_useragent-form",function(t,e){M.availability_useragent=M.availability_useragent||{},M.availability_useragent.form=t.Object(M.core_availability.plugin),M.availability_useragent.form.initInner=function(){},M.availability_useragent.form.getValue=function(e,a){"use strict";e=a.one("input[name="+e+"]").get("value");return M.availability_useragent.validateuseragent(e),e},M.availability_useragent.form.getNode=function(e){"use strict";var a,i="useragentes"+M.availability_useragent.form.instId;return M.availability_useragent.form.instId+=1,a="",a+='<span class="availability-group"><label for="'+i+'"><span class="p-r-1">'+M.util.get_string("title","availability_useragent")+" </span></label>",i=t.Node.create('<span class="form-inline">'+(a+='<input type="text" placeholder="^.*Mozilla.*(Firefox|Chrome).*$" name="useragentes" id="'+i+'">')+"</span>"),e.useragentes!==undefined&&i.one("input[name=useragentes]").set("value",e.useragentes),M.availability_useragent.form.addedEvents||(M.availability_useragent.form.addedEvents=!0,t.one(".availability-field").delegate("valuechange",function(){M.core_availability.form.update()},".availability_useragent input[name=useragentes]")),i},M.availability_useragent.validateuseragent=function(e){"use strict";try{return new RegExp(e),!0}catch(a){return!1}},M.availability_useragent.form.fillValue=function(e,a){e.useragentes=this.getValue("useragentes",a)},M.availability_useragent.form.fillErrors=function(e,a){"use strict";var i={};this.fillValue(i,a),!1===M.availability_useragent.validateuseragent(i.useragentes)&&e.push("availability_useragent:error_useragent")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});