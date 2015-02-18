/*
dhtmlxScheduler v.4.3.0 Stardard

This software is covered by GPL license. You also can obtain Commercial or Enterprise license to use it in non-GPL project - please contact sales@dhtmlx.com. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
scheduler.date.add_agenda=function(e){return scheduler.date.add(e,1,"year")},scheduler.templates.agenda_time=function(e,d,t){return t._timed?this.day_date(t.start_date,t.end_date,t)+" "+this.event_date(e):scheduler.templates.day_date(e)+" &ndash; "+scheduler.templates.day_date(d)},scheduler.templates.agenda_text=function(e,d,t){return t.text},scheduler.templates.agenda_date=function(){return""},scheduler.date.agenda_start=function(){return scheduler.date.date_part(scheduler._currentDate())},scheduler.attachEvent("onTemplatesReady",function(){function e(e){if(e){var d=scheduler.locale.labels;
scheduler._els.dhx_cal_header[0].innerHTML="<div class='dhx_agenda_line'><div>"+d.date+"</div><span style='padding-left:25px'>"+d.description+"</span></div>",scheduler._table_view=!0,scheduler.set_sizes()}}function d(){var e=(scheduler._date,scheduler.get_visible_events());e.sort(function(e,d){return e.start_date>d.start_date?1:-1});for(var d="<div class='dhx_agenda_area'>",t=0;t<e.length;t++){var a=e[t],l=a.color?"background:"+a.color+";":"",s=a.textColor?"color:"+a.textColor+";":"",r=scheduler.templates.event_class(a.start_date,a.end_date,a);
d+="<div class='dhx_agenda_line"+(r?" "+r:"")+"' event_id='"+a.id+"' style='"+s+l+(a._text_style||"")+"'><div class='dhx_agenda_event_time'>"+scheduler.templates.agenda_time(a.start_date,a.end_date,a)+"</div>",d+="<div class='dhx_event_icon icon_details'>&nbsp</div>",d+="<span>"+scheduler.templates.agenda_text(a.start_date,a.end_date,a)+"</span></div>"}d+="<div class='dhx_v_border'></div></div>",scheduler._els.dhx_cal_data[0].innerHTML=d,scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop=scheduler._agendaScrollTop||0;
var c=scheduler._els.dhx_cal_data[0].childNodes[0],_=c.childNodes[c.childNodes.length-1];_.style.height=c.offsetHeight<scheduler._els.dhx_cal_data[0].offsetHeight?"100%":c.offsetHeight+"px";var n=scheduler._els.dhx_cal_data[0].firstChild.childNodes;scheduler._els.dhx_cal_date[0].innerHTML=scheduler.templates.agenda_date(scheduler._min_date,scheduler._max_date,scheduler._mode),scheduler._rendered=[];for(var t=0;t<n.length-1;t++)scheduler._rendered[t]=n[t]}var t=scheduler.dblclick_dhx_cal_data;scheduler.dblclick_dhx_cal_data=function(){if("agenda"==this._mode)!this.config.readonly&&this.config.dblclick_create&&this.addEventNow();
else if(t)return t.apply(this,arguments)},scheduler.attachEvent("onSchedulerResize",function(){return"agenda"==this._mode?(this.agenda_view(!0),!1):!0});var a=scheduler.render_data;scheduler.render_data=function(){return"agenda"!=this._mode?a.apply(this,arguments):void d()};var l=scheduler.render_view_data;scheduler.render_view_data=function(){return"agenda"==this._mode&&(scheduler._agendaScrollTop=scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop,scheduler._els.dhx_cal_data[0].childNodes[0].scrollTop=0),l.apply(this,arguments)
},scheduler.agenda_view=function(t){scheduler._min_date=scheduler.config.agenda_start||scheduler.date.agenda_start(scheduler._date),scheduler._max_date=scheduler.config.agenda_end||scheduler.date.add_agenda(scheduler._min_date,1),scheduler._table_view=!0,e(t),t&&d()}});
//# sourceMappingURL=../sources/ext/dhtmlxscheduler_agenda_view.js.map