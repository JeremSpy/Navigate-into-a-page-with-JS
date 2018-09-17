var x = document.body;
			x.addEventListener("keypress", gestionTouche, event);

			function gestionTouche() {

			var touche = event.key;
				switch(touche) {
					case "0":
	    				changePage("wayup_lien");
	    			break;
					case "1":
	    				changePage("presentation_lien");
	    			break;
					case "2":
	    				changePage("fonctions_lien");
	    			break;
					case "3":
	    				changePage("conception_lien");
	    			break;
					case "4":
	    				changePage("problemes_lien");
	    			break;
					case "5":
	    				changePage("test_lien");
	    			break;
					case "6":
	    				changePage("conclusion_lien");
	    			break;
					case "7":
	    				changePage("merci_lien");
	    			break;
					default:
				}
			}

			function changePage(lien){
				document.getElementById(lien).click();
			}
