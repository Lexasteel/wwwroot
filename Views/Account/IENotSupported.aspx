<%@ Page Title="" Language="C#" MasterPageFile="~/Views/Shared/Site.Master" Inherits="System.Web.Mvc.ViewPage" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TitleContent" runat="server">
	Internet Explorer не поддерживается системой
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
	<div align="center">
		<h2>Internet Explorer не поддерживается системой</h2>
		<h3>Предлагаем выбрать и установить любой из нижеперечисленных браузеров</h3>
		<div align="center">
			<a href="http://mozilla-russia.org/"><img src="/Content/images/browsers/Firefox.png" /></a>
			<a href="http://www.opera.com/download/"><img src="/Content/images/browsers/Opera.png" /></a>
			<a href="http://www.google.com/chrome"><img src="/Content/images/browsers/Chrome.png" /></a>
			<a href="http://www.apple.com/ru/safari/download/"><img src="/Content/images/browsers/Safari.png" /></a>
		</div>
	</div>
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="HeadContent" runat="server">
		
</asp:Content>
