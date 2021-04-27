(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return p})),t.d(n,"metadata",(function(){return u})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),l=(t(0),t(159)),r=t(168),o=t(169),c=t(38),p={id:"create-plugin",title:"Client Plugin API"},u={unversionedId:"extending/create-plugin",id:"extending/create-plugin",isDocsHomePage:!1,title:"Client Plugin API",description:"FlipperPlugin",source:"@site/../docs/extending/create-plugin.mdx",slug:"/extending/create-plugin",permalink:"/docs/extending/create-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/extending/create-plugin.mdx",version:"current",sidebar:"extending",previous:{title:"Desktop Plugin API",permalink:"/docs/extending/js-plugin-api"},next:{title:"Error Handling",permalink:"/docs/extending/error-handling"}},s=[{value:"FlipperPlugin",id:"flipperplugin",children:[]},{value:"Using FlipperConnection",id:"using-flipperconnection",children:[]},{value:"Push data to the desktop",id:"push-data-to-the-desktop",children:[{value:"Using a plugin instance to send data",id:"using-a-plugin-instance-to-send-data",children:[]}]},{value:"Background Plugins",id:"background-plugins",children:[]}],d={toc:s};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"flipperplugin"},"FlipperPlugin"),Object(l.b)("p",null,"The plugin implementation that runs on the (mobile) application side of things is called the ",Object(l.b)("em",{parentName:"p"},"client plugin")," in Flipper terminology.\nTo build a client plugin, implement the ",Object(l.b)("inlineCode",{parentName:"p"},"FlipperPlugin")," interface."),Object(l.b)("p",null,"The ID that is returned from your implementation needs to match the ",Object(l.b)("inlineCode",{parentName:"p"},"name")," defined in your JavaScript counterpart's ",Object(l.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(l.b)(r.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"},{label:"React Native (JS)",value:"rn"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"android",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'public class MyFlipperPlugin implements FlipperPlugin {\n  private FlipperConnection mConnection;\n\n  @Override\n  public String getId() {\n    return "MyFlipperPlugin";\n  }\n\n  @Override\n  public void onConnect(FlipperConnection connection) throws Exception {\n    mConnection = connection;\n  }\n\n  @Override\n  public void onDisconnect() throws Exception {\n    mConnection = null;\n  }\n\n  @Override\n  public boolean runInBackground() {\n    return false;\n  }\n}\n'))),Object(l.b)(o.a,{value:"ios",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objc"},'@interface MyFlipperPlugin : NSObject<FlipperPlugin>\n@end\n\n@implementation MyFlipperPlugin\n\n- (NSString*)identifier { return @"MyFlipperPlugin"; }\n- (void)didConnect:(FlipperConnection*)connection {}\n- (void)didDisconnect {}\n- (BOOL)runInBackground {}\n\n@end\n'))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cpp"},'class MyFlipperPlugin : public FlipperPlugin {\npublic:\n  std::string identifier() const override { return "MyFlipperPlugin"; }\n  void didConnect(std::shared_ptr<FlipperConnection> conn) override;\n  void didDisconnect() override;\n  bool runInBackground() override;\n};\n'))),Object(l.b)(o.a,{value:"rn",mdxType:"TabItem"},Object(l.b)("div",{class:"warning"},Object(l.b)("p",null,"Please note that using Flipper from JavaScript in React Native requires the package ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-native-flipper"},Object(l.b)("inlineCode",{parentName:"a"},"react-native-flipper"))," to be installed in the hosting application.")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},"import {addPlugin} from 'react-native-flipper';\n\naddPlugin({\n  getId() {\n    return 'MyFlipperPlugin';\n  },\n  onConnect(connection) {\n    console.log(\"connected\");\n  },\n  onDisconnect() {\n    console.log(\"disconnected\");\n  },\n  runInBackground() {\n    return false;\n  }\n})\n")))),Object(l.b)("h2",{id:"using-flipperconnection"},"Using FlipperConnection"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"onConnect")," will be called when your plugin becomes active. This will provide a ",Object(l.b)("inlineCode",{parentName:"p"},"FlipperConnection")," allowing you to register receivers for desktop method calls and respond with data."),Object(l.b)(r.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"},{label:"React Native (JS)",value:"rn"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"android",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'connection.receive("getData", new FlipperReceiver() {\n  @Override\n  public void onReceive(FlipperObject params, FlipperResponder responder) throws Exception {\n    responder.success(\n        new FlipperObject.Builder()\n            .put("data", MyData.get())\n            .build());\n  }\n});\n'))),Object(l.b)(o.a,{value:"ios",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objc"},'@interface MyFlipperPlugin : NSObject<FlipperPlugin>\n@end\n\n@implementation MyFlipperPlugin\n\n- (NSString*)identifier { return @"MyFlipperPlugin"; }\n\n- (void)didConnect:(FlipperConnection*)connection\n{\n  [connection receive:@"getData" withBlock:^(NSDictionary *params, FlipperResponder *responder) {\n    [responder success:@{\n      @"data":[MyData get],\n    }];\n  }];\n}\n\n- (void)didDisonnect {}\n\n@end\n'))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cpp"},'void MyFlipperPlugin::didConnect(std::shared_ptr<FlipperConnection> conn) {\n  conn->receive("getData", [](const folly::dynamic &params,\n                             std::unique_ptr<FlipperResponder> responder) {\n    dynamic response = folly::dynamic::object("data", getMyData());\n    responder->success(response);\n  });\n}\n'))),Object(l.b)(o.a,{value:"rn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'addPlugin({\n  getId() {\n    return \'MyFlipperPlugin\';\n  },\n  onConnect(connection) {\n    console.log("connected");\n    connection.receive("getData", (data, responder) => {\n      console.log("incoming data", data);\n      // respond with some data\n      responder.success({\n        ack: true\n      });\n    });\n  },\n  // ...as-is\n})\n')))),Object(l.b)("h2",{id:"push-data-to-the-desktop"},"Push data to the desktop"),Object(l.b)("p",null,"You don't have to wait for the desktop to request data though, you can also push data directly to the desktop. If the JS plugin subscribes to the same method, it will receive the data."),Object(l.b)(r.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"},{label:"React Native (JS)",value:"rn"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"android",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},'connection.send("MyMessage",\n    new FlipperObject.Builder()\n        .put("message", "Hello")\n        .build()\n'))),Object(l.b)(o.a,{value:"ios",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objc"},'[connection send:@"getData" withParams:@{@"message":@"hello"}];\n'))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cpp"},'void MyFlipperPlugin::didConnect(std::shared_ptr<FlipperConnection> conn) {\n  dynamic message = folly::dynamic::object("message", "hello");\n  conn->send("getData", message);\n}\n'))),Object(l.b)(o.a,{value:"rn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-javascript"},'addPlugin({\n  getId() {\n    return \'MyFlipperPlugin\';\n  },\n  onConnect(connection) {\n    console.log("connected");\n    connection.send("newRow", { message: "Hello" });\n  },\n  // ...as-is\n})\n')))),Object(l.b)("h3",{id:"using-a-plugin-instance-to-send-data"},"Using a plugin instance to send data"),Object(l.b)("p",null,"It is often useful to get an instance of a Flipper plugin to send data to it. Flipper makes this simple with built-in support."),Object(l.b)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},Object(l.b)("h4",{id:"dependency-injection-android-only"},"Dependency Injection (Android only)"),Object(l.b)("p",null,"The preferred method to obtain a plugin instance is to use dependency injection when available.\nFor apps like fb4a that use dependency injection, a Module should have already been created by the create-plugin script.\nThis module will define a Singleton instance of your plugin that gets added to the FlipperClient."),Object(l.b)("p",null,"You should use this instance of the plugin, by having it injected into your product code by the DI framework.\nAlternatively, you can modify the plugin's injection module so that it injects a component into the FlipperPlugin.")),Object(l.b)("h4",{id:"using-flipperclient-to-obtain-a-plugin-instance"},"using FlipperClient to obtain a plugin instance"),Object(l.b)("p",null,"Plugins should be treated as singleton instances as there can only be one ",Object(l.b)("inlineCode",{parentName:"p"},"FlipperClient")," and each ",Object(l.b)("inlineCode",{parentName:"p"},"FlipperClient")," can only have one instance of a certain plugin. The Flipper API makes this simple by offering a way to get the current client and query it for plugins."),Object(l.b)("p",null,'Plugins are identified by the string that their identifier method returns, in this example, "MyFlipperPlugin". Note that null checks may be required as plugins may not be initialized, for example in production builds.'),Object(l.b)(r.a,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"android",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-java"},"final FlipperClient client = AndroidFlipperClient.getInstanceIfInitialized(context);\nif (client != null) {\n  final MyFlipperPlugin plugin = client.getPluginByClass(MyFlipperPlugin.class);\n  plugin.sendData(myData);\n}\n"))),Object(l.b)(o.a,{value:"ios",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-objc"},'FlipperClient *client = [FlipperClient sharedClient];\nMyFlipperPlugin *myPlugin = [client pluginWithIdentifier:@"MyFlipperPlugin"];\n[myPlugin sendData:myData];\n'))),Object(l.b)(o.a,{value:"cpp",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-cpp"},'auto& client = FlipperClient::instance();\nauto myPlugin = client.getPlugin<MyFlipperPlugin>("MyFlipperPlugin");\nif (myPlugin) {\n  myPlugin->sendData(myData);\n}\n')))),Object(l.b)("p",null,"Here, ",Object(l.b)("inlineCode",{parentName:"p"},"sendData")," is an example of a method that might be implemented by the Flipper plugin."),Object(l.b)("h2",{id:"background-plugins"},"Background Plugins"),Object(l.b)("p",null,"In some cases you may want to provide data to Flipper even when your plugin is not currently active. Returning true in ",Object(l.b)("inlineCode",{parentName:"p"},"runInBackground()")," will result in ",Object(l.b)("inlineCode",{parentName:"p"},"onConnect")," being called as soon as Flipper connects, and allow you to use the connection at any time. See the ",Object(l.b)("a",{parentName:"p",href:"client-plugin-lifecycle"},"Client Plugin Lifecycle")," for more details."),Object(l.b)("p",null,"This should be used in combination with a ",Object(l.b)("inlineCode",{parentName:"p"},"persistedStateReducer")," on the desktop side. See the ",Object(l.b)("a",{parentName:"p",href:"js-plugin-api#background-plugins"},"JS Plugin API")," for details."),Object(l.b)("p",null,"The benefit is that the desktop plugin can process this data in the background and fire notifications. It also reduces the number of renders and time taken to display the data when the plugin becomes active."),Object(l.b)("div",{class:"warning"},Object(l.b)("p",null,"Please note that a background plugin could keep some data in memory until a Flipper connection is available, for example to keep statistics about the app startup process.\nHowever, a plugin shouldn't assume it will eventually get a connection, since this depends on whether the user has enabled the plugin on the Desktop side.\nSo make sure to not store unbounded amounts of data!")))}b.isMDXComponent=!0},159:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),u=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),b=a,g=s["".concat(r,".").concat(b)]||s[b]||d[b]||l;return t?i.a.createElement(g,o(o({ref:n},p),{},{components:t})):i.a.createElement(g,o({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=b;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},163:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},165:function(e,n,t){"use strict";var a=t(0),i=t(166);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},166:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},168:function(e,n,t){"use strict";var a=t(0),i=t.n(a),l=t(165),r=t(163),o=t(67),c=t.n(o);var p=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,s=e.values,d=e.groupId,b=e.className,g=Object(l.a)(),m=g.tabGroupChoices,h=g.setTabGroupChoices,v=Object(a.useState)(o),f=v[0],y=v[1],O=a.Children.toArray(e.children),j=[];if(null!=d){var P=m[d];null!=P&&P!==f&&s.some((function(e){return e.value===P}))&&y(P)}var F=function(e){var n=e.target,t=j.indexOf(n),a=O[t].props.value;y(a),null!=d&&(h(d,a),setTimeout((function(){var e,t,a,i,l,r,o,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,l=e.right,r=window,o=r.innerHeight,p=r.innerWidth,t>=0&&l<=p&&i<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c.a.tabItemActive),setTimeout((function(){return n.classList.remove(c.a.tabItemActive)}),2e3))}),150))},C=function(e){var n,t;switch(e.keyCode){case u:var a=j.indexOf(e.target)+1;t=j[a]||j[0];break;case p:var i=j.indexOf(e.target)-1;t=j[i]||j[j.length-1]}null===(n=t)||void 0===n||n.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},b)},s.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return j.push(e)},onKeyDown:C,onFocus:F,onClick:F},t)}))),n?Object(a.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},169:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);