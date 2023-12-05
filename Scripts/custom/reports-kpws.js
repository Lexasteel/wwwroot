function onSelRT(sel,hid)
{				
	document.getElementById(hid).value=sel.options[sel.selectedIndex].text;
	onSelCh();
}

function onSelVal(sel,hid)
{				
	document.getElementById(hid).value=sel.options[sel.selectedIndex].value;

	var rep = document.getElementById('report_type');
	rep.options.length = 0;
	
	var AddEl = document.getElementById('Additional');
	var ch = document.getElementById('report_ch');
	ch.options.length = 0;
			
	switch (sel.options[sel.selectedIndex].value)
	{
		// 125-->
		case "E125OLD-1309":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Воловое', '1',true,true);
			ch.options[1] = new Option('Ингулец', '2');
			
			break;
		case "E125OLD-2003":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-я нитка', '1',true,true);
			ch.options[1] = new Option('2-я нитка', '2');
			break;
		case "E126OLD-2077":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');			

			ch.options[0] = new Option('500 Блок повтора', '1',true,true);					
			break;
		case "E125OLD-1258":					
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Восход', '1',true,true);
			break;
		case "E125OLD-1844":					
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Городской', '1',true,true);
			ch.options[1] = new Option('Коммунист', '2');
			break;
///////////////////////////////НОВЫЕ/////////////////////////////////////////////				
		case "E125-1413":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('700', '1',true,true);
			ch.options[1] = new Option('800', '2');
			break;
		case "E125-744":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('КВК 300', '1',true,true);					
			break;
		case "E125-745":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('900', '1',true,true);
			ch.options[1] = new Option('700', '2');
			break;
		case "E125-510":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('100', '1',true,true);					
			break;
		case "E125-1307":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-й подъем 1к', '1',true,true);
			ch.options[1] = new Option('1-й подъем 2к', '2');
			break;
		case "E125-1308":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Магистральный', '1',true,true);
			ch.options[1] = new Option('Базавлук', '2');
			break;
		case "E125-1077":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_2B_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_2B_HOURLY');					
			
			ch.options[0] = new Option('Подключение "Ведмiдь"', '1',true,true);					
			break;
		case "E125-1388":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('ЮГОК', '1',true,true);					
			break;
		case "E125-1571":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('NKGZK', '1',true,true);
			ch.options[1] = new Option('Арселор Митал', '2');
			break;
		case "E125-1768":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Общий напорный коллектор', '1',true,true);					
			ch.options[0] = new Option('Горводоканал', '2',true,true);
			break;
		case "E125-1478":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-й канал', '1',true,true);					
			break;
		case "E125-1578":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-й канал', '1',true,true);
			break;
		case "E125-1620":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('РУ Ингулец', '1',true,true);
			ch.options[1] = new Option('Карачуны', '2');
			break;
		case "E125-1619":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			//ch.options[0] = new Option('1-й канал', '1',true,true);
			ch.options[0] = new Option('1к Левая нитка', '1',true,true);					
			ch.options[1] = new Option('2к Правая нитка', '2',true,true);					
			break;
		case "E125-1575":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-й канал', '1',true,true);					
			break;
		case "E125-1074":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Нива Трудовая', '2',true,true);								
			break;
		case "E125-1576":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Ингулец 1', '1',true,true);					
			ch.options[1] = new Option('Ингулец 2', '2');					
			break;
		case "E125-2100":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-й канал', '1',true,true);
			ch.options[1] = new Option('2-й канал', '2');
			break;
		case "E125-2144":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('1-й канал', '1',true,true);
			break;						
		case "E125-2164":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
			ch.options[0] = new Option('Мрия', '1',true,true);
			ch.options[1] = new Option('Мрия-1', '2');
			break;
//////////////////////////////////////////////////////////////////////////////////					
			
			
			
			
			
		// 126-->
		case "E126OLD-515":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
			ch.options[0] = new Option('1-я нитка', '1',true,true);
			ch.options[1] = new Option('2-я нитка', '2');
			break;
		case "E126OLD-829":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);					
			
			ch.options[0] = new Option('Дзержинский 600', '1',true,true);
			break;
		case "E126OLD-852":
			AddEl.style.visibility = "hidden";
			rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E126_HOURLY');
			
			ch.options[0] = new Option('расход 500', '1',true,true);
			ch.options[1] = new Option('расход 600', '2');
			break;
		case "E126OLD-853":
			AddEl.style.visibility = "hidden";					
			rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
			rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
			ch.options[0] = new Option('Дзержинка 1000', '1',true,true);
			ch.options[1] = new Option('Знаменский', '2');
			break;
			
		///////////////////////////////НОВЫЕ/////////////////////////////////////////////	
	case "E126OLD-814":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('1-й канал', '1',true,true);
		ch.options[1] = new Option('2-й канал', '2');
		break;

	case "E125OLDXOR-1806":	
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E125_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E125_HOURLY');					
			
		ch.options[0] = new Option('1-й канал', '1',true,true);
		ch.options[1] = new Option('2-й канал', '2');
		break;
		
	case "E126OLD-855":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('1-й канал', '1',true,true);
		ch.options[1] = new Option('2-й канал', '2');
		break;
	case "E126OLD-948":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('левая нитка', '1',true,true);
		ch.options[1] = new Option('правая нитка', '2');
		break;
	case "E126OLD-954":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('1-й канал', '1',true,true);				
		break;
	case "E126OLD-953":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('Силикатный', '1',true,true);				
		break;
	case "E126OLD-824":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('Пионер', '1',true,true);
		ch.options[1] = new Option('РИП-2', '2');
		break;
	case "E126OLD-774":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('ГВК-500', '1',true,true);				
		break;
	case "E126OLD-825":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('ХХ п.с.', '1',true,true);
		ch.options[1] = new Option('ЦГЗК', '2');
		break;
	case "E126OLD-827":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('Подача в РЧВ-1', '1',true,true);
		ch.options[1] = new Option('Подача в РЧВ-2', '2');
		break;
	case "E126OLD-826":
		AddEl.style.visibility = "hidden";					
		rep.options[0] = new Option('суточный', 'E126_DAILY',true,true);
		rep.options[1] = new Option('часовый', 'E126_HOURLY');					
			
		ch.options[0] = new Option('Ватутино', '1',true,true);
		ch.options[1] = new Option('3й м-н', '2');
		break;
		/////////////////////////////////////////////////////////////////////////////////
		// 126.09-->	
		case "E126OLD-872":					
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
			
			ch.options[0] = new Option('1 канал', '1',true,true);
			ch.options[1] = new Option('2 канал', '2');
			ch.options[2] = new Option('3 канал', '3');
			ch.options[3] = new Option('4 канал', '4');
			ch.options[4] = new Option('5 канал', '5');
			ch.options[5] = new Option('6 канал', '6');
			ch.options[6] = new Option('7 канал', '7');
			ch.options[7] = new Option('8 канал', '8');
		
			break;
		case "E126OLD-443":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
			
			ch.options[0] = new Option('Валовое', '1',true,true);
			ch.options[1] = new Option('Давление в напорном коллекторе', '2');
			ch.options[2] = new Option('Ингулец', '3');
			ch.options[3] = new Option('КМК', '4');
			ch.options[4] = new Option('Макулан', '5');
	
			break;
		case "E126OLD-448":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
			
			ch.options[0] = new Option('Восход 600', '1',true,true);
			ch.options[1] = new Option('Давление в напорном коллекторе', '2');
			ch.options[2] = new Option('Городской 700', '3');
			ch.options[3] = new Option('Коммунист 600', '4');
			ch.options[4] = new Option('5 канал', '5');
			ch.options[5] = new Option('6 канал', '6');
			ch.options[6] = new Option('7 канал', '7');
			ch.options[7] = new Option('8 канал', '8');
			
			break;
		case "E126OLD-870":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
			
			ch.options[0] = new Option('1 канал', '1',true,true);
			ch.options[1] = new Option('2 канал', '2');
			ch.options[2] = new Option('3 канал', '3');
			ch.options[3] = new Option('4 канал', '4');
			ch.options[4] = new Option('5 канал', '5');
			ch.options[5] = new Option('6 канал', '6');
			ch.options[6] = new Option('7 канал', '7');
			ch.options[7] = new Option('8 канал', '8');
			
		//	rep.options[0] = new Option('Суточный Дзержинский 600', 'E12609_ARCH1',true,true);
			break;
		case "E126OLD-222":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Преобразователь давления', '1',true,true);
			break;			

	///////////////////////////////НОВЫЕ/////////////////////////////////////////////	

		case "E12609-374":
				
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Гигант', '1',true,true);
			ch.options[1] = new Option('пр.Мира', '2');
			ch.options[2] = new Option('Соцгород', '3');
			ch.options[3] = new Option('Пионер', '4');
			ch.options[4] = new Option('Карачуны 800', '5');
			ch.options[5] = new Option('Карачуны 700', '6');
			ch.options[6] = new Option('Радушанский 1', '7');
			ch.options[7] = new Option('Радушанский 2', '8');
			
			break;

		case "E12609-383":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('левая нитка ИнГОКа', '1',true,true);
			ch.options[1] = new Option('правая нитка ИнГОКа', '2');
			ch.options[2] = new Option('РУ Ингулец', '3');
			ch.options[3] = new Option('Ингулец-Карачуны', '4');

			
			break;

		case "E12609-393":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('РЧВ №1.1', '1',true,true);
			ch.options[1] = new Option('РЧВ №1.2', '2');
			ch.options[2] = new Option('РЧВ №2', '3');
			ch.options[3] = new Option('Подача в РЧВ (800)', '4');
			ch.options[4] = new Option('Подача в РЧВ (1000)', '5');
			ch.options[5] = new Option('Давление левого коллектора', '6');
			ch.options[6] = new Option('Давление правого коллектора', '7');
			
			break;

		case "E12609-378":
		
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('1я нитка', '1',true,true);
			ch.options[1] = new Option('2я нитка', '2');
			ch.options[2] = new Option('3я нитка', '3');
			
			break;
		case "E12609-447":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Давление', '1',true,true);
			ch.options[1] = new Option('НКГОК', '2');
			ch.options[2] = new Option('Завод-1,2', '3');
			ch.options[3] = new Option('Горводоканал', '4');

			
			break;
		case "E12609-224":
		
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('СевГОК 1', '1',true,true);
			ch.options[1] = new Option('СевГОК 2', '2');
			ch.options[2] = new Option('4 напорный коллектор', '3');
			ch.options[3] = new Option('5 напорный коллектор', '4');
			ch.options[4] = new Option('РЧВ №1.1 левый', '5');
			ch.options[5] = new Option('РЧВ №1.2 правый', '6');
			ch.options[6] = new Option('РЧВ №2', '7');
			
			break;

		case "E12609-830":
		
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Щорса', '1',true,true);
			ch.options[1] = new Option('ПЖРК', '2');
			ch.options[2] = new Option('Давление 4 нап.кол.', '4');
			ch.options[3] = new Option('Давление 5 нап.кол.', '5');
			
			break;
			
		case "E12609-441":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('1 канал', '1',true,true);
			ch.options[1] = new Option('2 канал', '2');
			ch.options[2] = new Option('3 канал', '3');
			ch.options[3] = new Option('4 канал', '4');
			ch.options[4] = new Option('5 канал', '5');
			ch.options[5] = new Option('6 канал', '6');
			ch.options[6] = new Option('7 канал', '7');
			ch.options[7] = new Option('8 канал', '8');
			
			break;
		case "E12609-847":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('1 канал', '1',true,true);
			ch.options[1] = new Option('2 канал', '2');
			ch.options[2] = new Option('3 канал', '3');
			ch.options[3] = new Option('4 канал', '4');
			ch.options[4] = new Option('5 канал', '5');
			ch.options[5] = new Option('6 канал', '6');
			ch.options[6] = new Option('7 канал', '7');
			ch.options[7] = new Option('8 канал', '8');
			
			break;
		case "E12609-874":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Уровень РЧВ№1', '1',true,true);
			ch.options[1] = new Option('Уровень РЧВ№2', '2');
			ch.options[2] = new Option('Давление напорного коллектора', '3');
			ch.options[3] = new Option('Давление входного кол.', '4');
			ch.options[4] = new Option('Давление напорного кол.', '5');
			
			break;
		case "E12609-446":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Давление', '1',true,true);
			ch.options[1] = new Option('Уровень РЧВ1', '2');
			ch.options[2] = new Option('Уровень РЧВ2', '3');					
			break;		
		case "E12609-875":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Давление тех. вода 1', '1',true,true);
			ch.options[1] = new Option('Давление тех. вода 2', '2');
			ch.options[2] = new Option('Давление тех. вода 3', '3');
			ch.options[3] = new Option('Давление н.с.1 собственные нужды', '4');				
			
			break;
		case "E12609-215":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Тех. вода 1', '1',true,true);
			ch.options[1] = new Option('Тех. вода 2', '2');
			ch.options[2] = new Option('Тех. вода 3', '3');
			ch.options[3] = new Option('Ингулец 1', '4');
			ch.options[4] = new Option('Ингулец 2', '5');
			ch.options[5] = new Option('Димитрово', '6');
			ch.options[6] = new Option('Давление н.с.1', '7');
								
			break;	

		case "E12609-912":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Давление напорный коллектор', '1',true,true);
			ch.options[1] = new Option('РЧВ 1', '2');
			ch.options[2] = new Option('РЧВ 2', '3');
			ch.options[3] = new Option('РЧВ 3', '4');
			ch.options[4] = new Option('РЧВ 4', '5');
			
			break;
			
		case "E12609-111":
			AddEl.style.visibility = "visible";
			rep.options[0] = new Option('Поминутный', 'E12609_MIN',true,true);
			rep.options[1] = new Option('Почасовый', 'E12609_CHAS');
			rep.options[2] = new Option('Посуточный', 'E12609_SUT');
		
			ch.options[0] = new Option('Давление', '1',true,true);			
			break;
		
	////////////////////////////////////////////////////////////////////////////////////
	}
	
	onSelRT(document.getElementById('report_type'),'report_name');
	onSelCh();
}

function onSelCh()
{
	
	var rep = document.getElementById('report_type');
	var from_str = document.getElementById('from_str');
	var select_str = document.getElementById('select_str');
	var where_str = document.getElementById('where_str');
	var ch = document.getElementById('report_ch');
	var RepVal = document.getElementById('report_value');
	
	document.getElementById('conn').value = ch.options[ch.selectedIndex].text;
		
	var itogo_select1_str = document.getElementById('itogo_select1_str');
	var itogo_select2_str = document.getElementById('itogo_select2_str');
	
	switch (rep.value)
	{
	// 125-->
		case "E125_DAILY":
			document.getElementById('unit').value = 'м3/сутки';
			from_str.value = 'E125_DAILY';
			select_str.value = 'ROUND(DV' + ch.value + '_M3, 2) AS "v", (DT' + ch.value + 'NARABOTKI_SEK / 60) as "dtnm", (DT' + ch.value + 'OTSECHKA_SEK / 60) as "dtom", (DT' + ch.value + 'PREVYSHENIJA_SEK / 60) as "dtpm",(DT' + ch.value + 'PROSTOJ_SEK / 60) as "dtprm", (DTOTSUTSTVIJA_PITANIJA_SEK / 60) as "dtopm", (DT' + ch.value + 'REVERS_SEK / 60) as "dtrevm", P' + ch.value + '_SREDNEE';
			where_str.value = "DEVICE_UID='@uid' AND ADDITIONAL_FLAG=0";
			//теперь по колонкам для итого
			itogo_select1_str.value = 'DV' + ch.value + '_M3, DT' + ch.value + 'NARABOTKI_SEK, DT' + ch.value + 'OTSECHKA_SEK, DT' + ch.value + 'PREVYSHENIJA_SEK, DT' + ch.value + 'PROSTOJ_SEK, DTOTSUTSTVIJA_PITANIJA_SEK, DT' + ch.value + 'REVERS_SEK, P' + ch.value + '_SREDNEE';
			itogo_select2_str.value = 'ROUND(SUM(DV' + ch.value + '_M3), 2) AS "v", (SUM(DT' + ch.value + 'NARABOTKI_SEK) / 60) AS "s", (SUM(DT' + ch.value + 'OTSECHKA_SEK) / 60) AS "ots", (SUM(DT' + ch.value + 'PREVYSHENIJA_SEK) / 60) AS "prev", (SUM(DT' + ch.value + 'PROSTOJ_SEK) / 60) AS "pros", (SUM(DTOTSUTSTVIJA_PITANIJA_SEK) / 60) AS "pit", (SUM(DT' + ch.value + 'REVERS_SEK) / 60) AS "rev", SUM(P' + ch.value + '_SREDNEE) AS "davl"';
		
			break;
		case "E125_HOURLY":
			document.getElementById('unit').value = 'м3/час';
			from_str.value = 'E125_HOURLY';
			select_str.value = 'ROUND(DV' + ch.value + '_M3, 2) AS "v", (DT' + ch.value + 'NARABOTKI_SEK / 60) as "dtnm", (DT' + ch.value + 'OTSECHKA_SEK / 60) as "dtom", (DT' + ch.value + 'PREVYSHENIJA_SEK / 60) as "dtpm",(DT' + ch.value + 'PROSTOJ_SEK / 60) as "dtprm", (DTOTSUTSTVIJA_PITANIJA_SEK / 60) as "dtopm", (DT' + ch.value + 'REVERS_SEK / 60) as "dtrevm", P' + ch.value + '_SREDNEE';
			where_str.value = "DEVICE_UID='@uid' AND ADDITIONAL_FLAG=0";
			//теперь по колонкам для итого
			itogo_select1_str.value = 'DV' + ch.value + '_M3, DT' + ch.value + 'NARABOTKI_SEK, DT' + ch.value + 'OTSECHKA_SEK, DT' + ch.value + 'PREVYSHENIJA_SEK, DT' + ch.value + 'PROSTOJ_SEK, DTOTSUTSTVIJA_PITANIJA_SEK, DT' + ch.value + 'REVERS_SEK, P' + ch.value + '_SREDNEE';
			itogo_select2_str.value = 'ROUND(SUM(DV' + ch.value + '_M3), 2) AS "v", (SUM(DT' + ch.value + 'NARABOTKI_SEK) / 60) AS "s", (SUM(DT' + ch.value + 'OTSECHKA_SEK) / 60) AS "ots", (SUM(DT' + ch.value + 'PREVYSHENIJA_SEK) / 60) AS "prev", (SUM(DT' + ch.value + 'PROSTOJ_SEK) / 60) AS "pros", (SUM(DTOTSUTSTVIJA_PITANIJA_SEK) / 60) AS "pit", (SUM(DT' + ch.value + 'REVERS_SEK) / 60) AS "rev", SUM(P' + ch.value + '_SREDNEE) AS "davl"';
		
			break;
			
			// 125 2b-->
		case "E125_2B_DAILY":
			document.getElementById('unit').value = 'м3/сутки';
			from_str.value = 'E125_2B_DAILY';
			select_str.value = 'ROUND(V' + ch.value + '_M3, 2) AS "v", (T' + ch.value + '_NARABOTKI_SEK / 60) as "dtnm", (T' + ch.value + '_OTSECHKI / 60) as "dtom", (T' + ch.value + '_PREVISHENIA / 60) as "dtpm", (DTOTSUTSTVIJA_PITANIJA_SEK / 60) as "dtopm", (T' + ch.value + '_REVERS_SEK / 60) as "dtrevm", P' + ch.value + '_SREDNEE';
			where_str.value = "DEVICE_UID='@uid' AND ADDITIONAL_FLAG=0";
			//теперь по колонкам для итого
			itogo_select1_str.value = 'V' + ch.value + '_M3, T' + ch.value + '_NARABOTKI_SEK, T' + ch.value + '_OTSECHKI, T' + ch.value + '_PREVISHENIA, DTOTSUTSTVIJA_PITANIJA_SEK, T' + ch.value + '_REVERS_SEK, P' + ch.value + '_SREDNEE';
			itogo_select2_str.value = 'ROUND(SUM(V' + ch.value + '_M3), 2) AS "v", (SUM(T' + ch.value + '_NARABOTKI_SEK) / 60) AS "s", (SUM(T' + ch.value + '_OTSECHKI) / 60) AS "ots", (SUM(T' + ch.value + '_PREVISHENIA) / 60) AS "prev", (SUM(DTOTSUTSTVIJA_PITANIJA_SEK) / 60) AS "pit", (SUM(T' + ch.value + '_REVERS_SEK) / 60) AS "rev", SUM(P' + ch.value + '_SREDNEE) AS "davl"';
		
			break;
		case "E125_2B_HOURLY":
			document.getElementById('unit').value = 'м3/час';
			from_str.value = 'E125_2B_HOURLY';
			select_str.value = 'ROUND(V' + ch.value + '_M3, 2) AS "v", (T' + ch.value + '_NARABOTKI_SEK / 60) as "dtnm", (T' + ch.value + '_OTSECHKI / 60) as "dtom", (T' + ch.value + '_PREVISHENIA / 60) as "dtpm", (DTOTSUTSTVIJA_PITANIJA_SEK / 60) as "dtopm", (T' + ch.value + '_REVERS_SEK / 60) as "dtrevm", P' + ch.value + '_SREDNEE';
			where_str.value = "DEVICE_UID='@uid' AND ADDITIONAL_FLAG=0";
			//теперь по колонкам для итого
			itogo_select1_str.value = 'V' + ch.value + '_M3, T' + ch.value + '_NARABOTKI_SEK, T' + ch.value + '_OTSECHKI, T' + ch.value + '_PREVISHENIA,  DTOTSUTSTVIJA_PITANIJA_SEK, T' + ch.value + '_REVERS_SEK, P' + ch.value + '_SREDNEE';
			itogo_select2_str.value = 'ROUND(SUM(V' + ch.value + '_M3), 2) AS "v", (SUM(T' + ch.value + '_NARABOTKI_SEK) / 60) AS "s", (SUM(T' + ch.value + '_OTSECHKI) / 60) AS "ots", (SUM(T' + ch.value + '_PREVISHENIA) / 60) AS "prev", (SUM(DTOTSUTSTVIJA_PITANIJA_SEK) / 60) AS "pit", (SUM(T' + ch.value + '_REVERS_SEK) / 60) AS "rev", SUM(P' + ch.value + '_SREDNEE) AS "davl"';
		
			break;
	
	// 126-->
		case "E126_DAILY":
			document.getElementById('unit').value = 'м3/сутки';
			from_str.value = 'E126_DAILY';
			select_str.value = 'ROUND(DV' + ch.value + '_M3, 2) AS "v", (DT' + ch.value + '_NARABOTKI_SEK / 60) as "dtnm", (DT' + ch.value + '_PROSTOJA_SEK / 60) as "dtom", (DT' + ch.value + '_AVARII_SEK / 60) as "dtpm", DP_' + ch.value + '_SREDNEE';
			where_str.value = "DEVICE_UID='@uid' AND ADDITIONAL_FLAG=0";
			
			itogo_select1_str.value = 'DV' + ch.value + '_M3, DT' + ch.value + '_NARABOTKI_SEK, DT' + ch.value + '_PROSTOJA_SEK, DT' + ch.value + '_AVARII_SEK, DP_' + ch.value + '_SREDNEE';
			itogo_select2_str.value = 'ROUND(SUM(DV' + ch.value + '_M3), 2) AS "v", (SUM(DT' + ch.value + '_NARABOTKI_SEK) / 60) AS "s", (SUM(DT' + ch.value + '_PROSTOJA_SEK) / 60) AS "ots", (SUM(DT' + ch.value + '_AVARII_SEK) / 60) AS "prev", SUM(DP_' + ch.value + '_SREDNEE) AS "davl"';
			break;
		case "E126_HOURLY":
			document.getElementById('unit').value = 'м3/час';
			from_str.value = 'E126_HOURLY';
			select_str.value = 'ROUND(DV' + ch.value + '_M3, 2) AS "v", (DT' + ch.value + '_NARABOTKI_SEK / 60) as "dtnm", (DT' + ch.value + '_PROSTOJA_SEK / 60) as "dtom", (DT' + ch.value + '_AVARII_SEK / 60) as "dtpm", DP_' + ch.value + '_SREDNEE';
			where_str.value = "DEVICE_UID='@uid' AND ADDITIONAL_FLAG=0";
			
			itogo_select1_str.value = 'DV' + ch.value + '_M3, DT' + ch.value + '_NARABOTKI_SEK, DT' + ch.value + '_PROSTOJA_SEK, DT' + ch.value + '_AVARII_SEK, DP_' + ch.value + '_SREDNEE';
			itogo_select2_str.value = 'ROUND(SUM(DV' + ch.value + '_M3), 2) AS "v", (SUM(DT' + ch.value + '_NARABOTKI_SEK) / 60) AS "s", (SUM(DT' + ch.value + '_PROSTOJA_SEK) / 60) AS "ots", (SUM(DT' + ch.value + '_AVARII_SEK) / 60) AS "prev", SUM(DP_' + ch.value + '_SREDNEE) AS "davl"';
			break;
	
	// 126.09-->			
		case "E12609_MIN":
			document.getElementById('unit').value = 'м3/мин';
			if(RepVal.value == "SRED")
			{
				select_str.value = 'ROUND(K' + ch.value + ', 2)  as "k", (DT' + ch.value + '_NARABOTKI / 60) as "dtnm", ((60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) / 60) as "dtom", (DT1_OTSUTSTVIA_PITANIA / 60) as "dtop"';
				from_str.value = "E12609_ARCH1";					
				
				itogo_select1_str.value = 'K' + ch.value + ', DT' + ch.value + '_NARABOTKI, DT1_OTSUTSTVIA_PITANIA';
				itogo_select2_str.value = 'ROUND(AVG(K' + ch.value + '), 2) AS "k", (SUM(DT' + ch.value + '_NARABOTKI) / 60) AS "s", (SUM(60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) / 60) AS "ots", (SUM(DT1_OTSUTSTVIA_PITANIA) / 60) AS "prev"';
			}
			if(RepVal.value == "SUM")
			{
				select_str.value = 'ROUND(K' + ch.value + ', 2)  as "k", (DT' + ch.value + '_NARABOTKI / 60) as "dtnm", ((60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) / 60) as "dtom", (DT1_OTSUTSTVIA_PITANIA / 60) as "dtop"';
				from_str.value = "E12609_ARCH1";					
				
				itogo_select1_str.value = 'K' + ch.value + ', DT' + ch.value + '_NARABOTKI, DT1_OTSUTSTVIA_PITANIA';
				itogo_select2_str.value = 'ROUND(SUM(K' + ch.value + '), 2) AS "k", (SUM(DT' + ch.value + '_NARABOTKI) / 60) AS "s", (SUM(60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) / 60) AS "ots", (SUM(DT1_OTSUTSTVIA_PITANIA) / 60) AS "prev"';
			}
			where_str.value = "DEVICE_UID='@uid'";
			break;		
		case "E12609_CHAS":
			document.getElementById('unit').value = 'м3/час';
			if(RepVal.value == "SRED")
			{
				select_str.value = 'ROUND(K' + ch.value + ', 2)  as "k", DT' + ch.value + '_NARABOTKI, (60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) as "dtom", DT1_OTSUTSTVIA_PITANIA';
				from_str.value = "E12609_ARCH2";

				itogo_select1_str.value = 'K' + ch.value + ', DT' + ch.value + '_NARABOTKI, DT1_OTSUTSTVIA_PITANIA';
				itogo_select2_str.value = 'ROUND(AVG(K' + ch.value + '), 2) AS "k", SUM(DT' + ch.value + '_NARABOTKI) AS "s", SUM(60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) AS "ots", SUM(DT1_OTSUTSTVIA_PITANIA) AS "prev"';
			}
			if(RepVal.value == "SUM")
			{
				select_str.value = 'ROUND(K' + ch.value + ', 2)  as "k", DT' + ch.value + '_NARABOTKI, (60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) as "dtom", DT1_OTSUTSTVIA_PITANIA';
				from_str.value = "E12609_ARCH2";					
				
				itogo_select1_str.value = 'K' + ch.value + ', DT' + ch.value + '_NARABOTKI, DT1_OTSUTSTVIA_PITANIA';
				itogo_select2_str.value = 'ROUND(SUM(K' + ch.value + '), 2) AS "k", SUM(DT' + ch.value + '_NARABOTKI) AS "s", SUM(60 - DT' + ch.value + '_NARABOTKI - DT1_OTSUTSTVIA_PITANIA) AS "ots", SUM(DT1_OTSUTSTVIA_PITANIA) AS "prev"';
			}
			break;		
			where_str.value = "DEVICE_UID='@uid'";
		case "E12609_SUT":
			document.getElementById('unit').value = 'м3/сутки';
			if(RepVal.value == "SRED")
			{
				select_str.value = 'ROUND(K' + ch.value + '_AVG, 2)  as "k", DT' + ch.value + '_NARABOTKI, (1440 - DT' + ch.value + '_NARABOTKI - DT_OTSUTSTVIA_PITANIA) as "dtom", DT_OTSUTSTVIA_PITANIA';
				from_str.value = "E12609_DAILY";					
				
				itogo_select1_str.value = 'K' + ch.value + '_AVG, DT' + ch.value + '_NARABOTKI, DT_OTSUTSTVIA_PITANIA';
				itogo_select2_str.value = 'ROUND(AVG(K' + ch.value + '_AVG), 2) AS "k", SUM(DT' + ch.value + '_NARABOTKI) AS "s", SUM(1440 - DT' + ch.value + '_NARABOTKI - DT_OTSUTSTVIA_PITANIA) AS "ots", SUM(DT_OTSUTSTVIA_PITANIA) AS "prev"';
			}
			if(RepVal.value == "SUM")
			{
				select_str.value = 'ROUND(K' + ch.value + ', 2)  as "k", DT' + ch.value + '_NARABOTKI, (1440 - DT' + ch.value + '_NARABOTKI - DT_OTSUTSTVIA_PITANIA) as "dtom", DT_OTSUTSTVIA_PITANIA';
				from_str.value = "E12609_DAILY";					
				
				itogo_select1_str.value = 'K' + ch.value + ', DT' + ch.value + '_NARABOTKI, DT_OTSUTSTVIA_PITANIA';
				itogo_select2_str.value = 'ROUND(SUM(K' + ch.value + '), 2) AS "k", SUM(DT' + ch.value + '_NARABOTKI) AS "s", SUM(1440 - DT' + ch.value + '_NARABOTKI - DT_OTSUTSTVIA_PITANIA) AS "ots", SUM(DT_OTSUTSTVIA_PITANIA) AS "prev"';
			}
			where_str.value = "DEVICE_UID='@uid'";
			break;			
		
		default:					
			break;					
	}
	fillComboBox();
}

function getDefaultUnit()
{
	switch (document.getElementById('report_type').value)
	{
		case "E12609_SUT":
		case "E126_DAILY":
		case "E125_DAILY":
		case "E125_2B_DAILY":
			return 'м3/сутки';
		case "E12609_CHAS":
		case "E126_HOURLY":
		case "E125_HOURLY":
		case "E125_2B_HOURLY":
			return 'м3/час';
		break;
		case "E12609_MIN":
			return 'м3/мин';
	}
}

function onBeforeSubmittingReport()
{
	var lcChannel = $("#report_ch option:selected").text().toLowerCase();
	var inpColHeader = document.getElementById('columnHeader');
	var inpUnit = document.getElementById('unit');
	inpColHeader.value = "Расход";
	inpUnit.value = getDefaultUnit();
	
	if (lcChannel.indexOf("давл") >= 0)
	{
	  inpColHeader.value = "Давление";
	  inpUnit.value = "МПа";
	}
	else if (lcChannel.indexOf("подача") >= 0)
	{
	}
	else if ((lcChannel.indexOf("уровен") >= 0) || (lcChannel.indexOf("рчв") >= 0))
	{
	  inpColHeader.value = "Уровень";
	  inpUnit.value = "м";
	}
}