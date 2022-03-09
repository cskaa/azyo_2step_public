var locs = [
      {
        "country": "Afghanistan",
        "states": ["Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamian", "Daykondi", "Farah", "Faryab", "Ghazni", "Ghowr", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Konar", "Kondoz", "Laghman", "Lowgar", "Nangarhar", "Nimruz", "Nurestan", "Oruzgan", "Paktia", "Paktika", "Panjshir", "Parvan", "Samangan", "Sar-e Pol", "Takhar", "Vardak", "Zabol"]
      },
      {
        "country": "Albania",
        "states": ["Berat", "Dibres", "Durres", "Elbasan", "Fier", "Gjirokastre", "Korce", "Kukes", "Lezhe", "Shkoder", "Tirane", "Vlore"]
      },
      {
        "country": "Algeria",
        "states": ["Adrar", "Ain Defla", "Ain Temouchent", "Alger", "Annaba", "Batna", "Bechar", "Bejaia", "Biskra", "Blida", "Bordj Bou Arreridj", "Bouira", "Boumerdes", "Chlef", "Constantine", "Djelfa", "El Bayadh", "El Oued", "El Tarf", "Ghardaia", "Guelma", "Illizi", "Jijel", "Khenchela", "Laghouat", "Muaskar", "Medea", "Mila", "Mostaganem", "M'Sila", "Naama", "Oran", "Ouargla", "Oum el Bouaghi", "Relizane", "Saida", "Setif", "Sidi Bel Abbes", "Skikda", "Souk Ahras", "Tamanghasset", "Tebessa", "Tiaret", "Tindouf", "Tipaza", "Tissemsilt", "Tizi Ouzou", "Tlemcen"]
      },
      {
        "country": "Andorra",
        "states": ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"]
      },
      {
        "country": "Angola",
        "states": ["Bengo", "Benguela", "Bie", "Cabinda", "Cuando Cubango", "Cuanza Norte", "Cuanza Sul", "Cunene", "Huambo", "Huila", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uige", "Zaire"]
      },
      {
        "country": "Antarctica",
        "states": []
      },
      {
        "country": "Antigua and Barbuda",
        "states": ["Barbuda", "Redonda", "Saint George", "Saint John", "Saint Mary", "Saint Paul", "Saint Peter", "Saint Philip"]
      },
      {
        "country": "Argentina",
        "states": ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"]
      },
      {
        "country": "Armenia",
        "states": ["Aragatsotn", "Ararat", "Armavir", "Geghark'unik'", "Kotayk'", "Lorri", "Shirak", "Syunik'", "Tavush", "Vayots' Dzor", "Yerevan"]
      },
      {
        "country": "Australia",
        "states": []
      },
      {
        "country": "Austria",
        "states": ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"]
      },
      {
        "country": "Azerbaijan",
        "states": ["Abseron Rayonu", "Agcabadi Rayonu", "Agdam Rayonu", "Agdas Rayonu", "Agstafa Rayonu", "Agsu Rayonu", "Astara Rayonu", "Balakan Rayonu", "Barda Rayonu", "Beylaqan Rayonu", "Bilasuvar Rayonu", "Cabrayil Rayonu", "Calilabad Rayonu", "Daskasan Rayonu", "Davaci Rayonu", "Fuzuli Rayonu", "Gadabay Rayonu", "Goranboy Rayonu", "Goycay Rayonu", "Haciqabul Rayonu", "Imisli Rayonu", "Ismayilli Rayonu", "Kalbacar Rayonu", "Kurdamir Rayonu", "Lacin Rayonu", "Lankaran Rayonu", "Lerik Rayonu", "Masalli Rayonu", "Neftcala Rayonu", "Oguz Rayonu", "Qabala Rayonu", "Qax Rayonu", "Qazax Rayonu", "Qobustan Rayonu", "Quba Rayonu", "Qubadli Rayonu", "Qusar Rayonu", "Saatli Rayonu", "Sabirabad Rayonu", "Saki Rayonu", "Salyan Rayonu", "Samaxi Rayonu", "Samkir Rayonu", "Samux Rayonu", "Siyazan Rayonu", "Susa Rayonu", "Tartar Rayonu", "Tovuz Rayonu", "Ucar Rayonu", "Xacmaz Rayonu", "Xanlar Rayonu", "Xizi Rayonu", "Xocali Rayonu", "Xocavand Rayonu", "Yardimli Rayonu", "Yevlax Rayonu", "Zangilan Rayonu", "Zaqatala Rayonu", "Zardab Rayonu", "Ali Bayramli Sahari", "Baki Sahari", "Ganca Sahari", "Lankaran Sahari", "Mingacevir Sahari", "Naftalan Sahari", "Saki Sahari", "Sumqayit Sahari", "Susa Sahari", "Xankandi Sahari", "Yevlax Sahari", "Naxcivan Muxtar"]
      },
      {
        "country": "Bahamas",
        "states": ["Acklins and Crooked Islands", "Bimini", "Cat Island", "Exuma", "Freeport", "Fresh Creek", "Governor's Harbour", "Green Turtle Cay", "Harbour Island", "High Rock", "Inagua", "Kemps Bay", "Long Island", "Marsh Harbour", "Mayaguana", "New Providence", "Nichollstown and Berry Islands", "Ragged Island", "Rock Sound", "Sandy Point", "San Salvador and Rum Cay"]
      },
      {
        "country": "Bahrain",
        "states": ["Al Hadd", "Al Manamah", "Al Mintaqah al Gharbiyah", "Al Mintaqah al Wusta", "Al Mintaqah ash Shamaliyah", "Al Muharraq", "Ar Rifa' wa al Mintaqah al Janubiyah", "Jidd Hafs", "Madinat Hamad", "Madinat 'Isa", "Juzur Hawar", "Sitrah"]
      },
      {
        "country": "Bangladesh",
        "states": ["Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Sylhet"]
      },
      {
        "country": "Barbados",
        "states": ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"]
      },
      {
        "country": "Belarus",
        "states": ["Brest", "Homyel", "Horad Minsk", "Hrodna", "Mahilyow", "Minsk", "Vitsyebsk"]
      },
      {
        "country": "Belgium",
        "states": ["Antwerpen", "Brabant Wallon", "Brussels", "Flanders", "Hainaut", "Liege", "Limburg", "Luxembourg", "Namur", "Oost-Vlaanderen", "Vlaams-Brabant", "Wallonia", "West-Vlaanderen"]
      },
      {
        "country": "Belize",
        "states": ["Belize", "Cayo", "Corozal", "Orange Walk", "Stann Creek", "Toledo"]
      },
      {
        "country": "Benin",
        "states": ["Alibori", "Atakora", "Atlantique", "Borgou", "Collines", "Donga", "Kouffo", "Littoral", "Mono", "Oueme", "Plateau", "Zou"]
      },
      {
        "country": "Bermuda",
        "states": ["Devonshire", "Hamilton", "Hamilton", "Paget", "Pembroke", "Saint George", "Saint George's", "Sandys", "Smith's", "Southampton", "Warwick"]
      },
      {
        "country": "Bhutan",
        "states": ["Bumthang", "Chukha", "Dagana", "Gasa", "Haa", "Lhuntse", "Mongar", "Paro", "Pemagatshel", "Punakha", "Samdrup Jongkhar", "Samtse", "Sarpang", "Thimphu", "Trashigang", "Trashiyangste", "Trongsa", "Tsirang", "Wangdue Phodrang", "Zhemgang"]
      },
      {
        "country": "Bolivia",
        "states": ["Chuquisaca", "Cochabamba", "Beni", "La Paz", "Oruro", "Pando", "Potosi", "Santa Cruz", "Tarija"]
      },
      {
        "country": "Bosnia and Herzegovina",
        "states": ["Una-Sana [Federation]", "Posavina [Federation]", "Tuzla [Federation]", "Zenica-Doboj [Federation]", "Bosnian Podrinje [Federation]", "Central Bosnia [Federation]", "Herzegovina-Neretva [Federation]", "West Herzegovina [Federation]", "Sarajevo [Federation]", " West Bosnia [Federation]", "Banja Luka [RS]", "Bijeljina [RS]", "Doboj [RS]", "Fo?a [RS]", "Sarajevo-Romanija [RS]", "Trebinje [RS]", "Vlasenica [RS]"]
      },
      {
        "country": "Botswana",
        "states": ["Central", "Ghanzi", "Kgalagadi", "Kgatleng", "Kweneng", "North East", "North West", "South East", "Southern"]
      },
      {
        "country": "Brazil",
        "states": ["Acre", "Alagoas", "Amapa", "Amazonas", "Bahia", "Ceara", "Distrito Federal", "Espirito Santo", "Goias", "Maranhao", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Para", "Paraiba", "Parana", "Pernambuco", "Piaui", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondonia", "Roraima", "Santa Catarina", "Sao Paulo", "Sergipe", "Tocantins"]
      },
      {
        "country": "Brunei",
        "states": ["Belait", "Brunei and Muara", "Temburong", "Tutong"]
      },
      {
        "country": "Bulgaria",
        "states": ["Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Khaskovo", "Kurdzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofiya", "Sofiya-Grad", "Stara Zagora", "Turgovishte", "Varna", "Veliko Turnovo", "Vidin", "Vratsa", "Yambol"]
      },
      {
        "country": "Burkina Faso",
        "states": ["Bale", "Bam", "Banwa", "Bazega", "Bougouriba", "Boulgou", "Boulkiemde", "Comoe", "Ganzourgou", "Gnagna", "Gourma", "Houet", "Ioba", "Kadiogo", "Kenedougou", "Komondjari", "Kompienga", "Kossi", "Koulpelogo", "Kouritenga", "Kourweogo", "Leraba", "Loroum", "Mouhoun", "Namentenga", "Nahouri", "Nayala", "Noumbiel", "Oubritenga", "Oudalan", "Passore", "Poni", "Sanguie", "Sanmatenga", "Seno", "Sissili", "Soum", "Sourou", "Tapoa", "Tuy", "Yagha", "Yatenga", "Ziro", "Zondoma", "Zoundweogo"]
      },
      {
        "country": "Burma",
        "states": ["Ayeyarwady", "Bago", "Magway", "Mandalay", "Sagaing", "Tanintharyi", "Yangon", "Chin State", "Kachin State", "Kayin State", "Kayah State", "Mon State", "Rakhine State", "Shan State"]
      },
      {
        "country": "Burundi",
        "states": ["Bubanza", "Bujumbura Mairie", "Bujumbura Rural", "Bururi", "Cankuzo", "Cibitoke", "Gitega", "Karuzi", "Kayanza", "Kirundo", "Makamba", "Muramvya", "Muyinga", "Mwaro", "Ngozi", "Rutana", "Ruyigi"]
      },
      {
        "country": "Cambodia",
        "states": ["Banteay Mean Chey", "Batdambang", "Kampong Cham", "Kampong Chhnang", "Kampong Spoe", "Kampong Thum", "Kampot", "Kandal", "Koh Kong", "Kracheh", "Mondol Kiri", "Otdar Mean Chey", "Pouthisat", "Preah Vihear", "Prey Veng", "Rotanakir", "Siem Reab", "Stoeng Treng", "Svay Rieng", "Takao", "Keb", "Pailin", "Phnom Penh", "Preah Seihanu"]
      },
      {
        "country": "Cameroon",
        "states": ["Adamaoua", "Centre", "Est", "Extreme-Nord", "Littoral", "Nord", "Nord-Ouest", "Ouest", "Sud", "Sud-Ouest"]
      },
      {
        "country": "Canada",
        "states": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"]
      },
      {
        "country": "Cape Verde",
        "states": []
      },
      {
        "country": "Central African Republic",
        "states": ["Bamingui-Bangoran", "Bangui", "Basse-Kotto", "Haute-Kotto", "Haut-Mbomou", "Kemo", "Lobaye", "Mambere-Kadei", "Mbomou", "Nana-Grebizi", "Nana-Mambere", "Ombella-Mpoko", "Ouaka", "Ouham", "Ouham-Pende", "Sangha-Mbaere", "Vakaga"]
      },
      {
        "country": "Chad",
        "states": ["Batha", "Biltine", "Borkou-Ennedi-Tibesti", "Chari-Baguirmi", "Guéra", "Kanem", "Lac", "Logone Occidental", "Logone Oriental", "Mayo-Kebbi", "Moyen-Chari", "Ouaddaï", "Salamat", "Tandjile"]
      },
      {
        "country": "Chile",
        "states": ["Aysen", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "O'Higgins", "Los Lagos", "Magallanes y la Antartica Chilena", "Maule", "Santiago Region Metropolitana", "Tarapaca", "Valparaiso"]
      },
      {
        "country": "China",
        "states": ["Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan", "Hubei", "Hunan", "Jiangsu", "Jiangxi", "Jilin", "Liaoning", "Qinghai", "Shaanxi", "Shandong", "Shanxi", "Sichuan", "Yunnan", "Zhejiang", "Guangxi", "Nei Mongol", "Ningxia", "Xinjiang", "Xizang (Tibet)", "Beijing", "Chongqing", "Shanghai", "Tianjin"]
      },
      {
        "country": "Colombia",
        "states": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bogota District Capital", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres & Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"]
      },
      {
        "country": "Comoros",
        "states": ["Grande Comore (Njazidja)", "Anjouan (Nzwani)", "Moheli (Mwali)"]
      },
      {
        "country": "Congo, Democratic Republic",
        "states": ["Bandundu", "Bas-Congo", "Equateur", "Kasai-Occidental", "Kasai-Oriental", "Katanga", "Kinshasa", "Maniema", "Nord-Kivu", "Orientale", "Sud-Kivu"]
      },
      {
        "country": "Congo, Republic of the",
        "states": ["Bouenza", "Brazzaville", "Cuvette", "Cuvette-Ouest", "Kouilou", "Lekoumou", "Likouala", "Niari", "Plateaux", "Pool", "Sangha"]
      },
      {
        "country": "Costa Rica",
        "states": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"]
      },
      {
        "country": "Cote d'Ivoire",
        "states": []
      },
      {
        "country": "Croatia",
        "states": ["Bjelovarsko-Bilogorska", "Brodsko-Posavska", "Dubrovacko-Neretvanska", "Istarska", "Karlovacka", "Koprivnicko-Krizevacka", "Krapinsko-Zagorska", "Licko-Senjska", "Medimurska", "Osjecko-Baranjska", "Pozesko-Slavonska", "Primorsko-Goranska", "Sibensko-Kninska", "Sisacko-Moslavacka", "Splitsko-Dalmatinska", "Varazdinska", "Viroviticko-Podravska", "Vukovarsko-Srijemska", "Zadarska", "Zagreb", "Zagrebacka"]
      },
      {
        "country": "Cuba",
        "states": ["Camaguey", "Ciego de Avila", "Cienfuegos", "Ciudad de La Habana", "Granma", "Guantanamo", "Holguin", "Isla de la Juventud", "La Habana", "Las Tunas", "Matanzas", "Pinar del Rio", "Sancti Spiritus", "Santiago de Cuba", "Villa Clara"]
      },
      {
        "country": "Cyprus",
        "states": ["Famagusta", "Kyrenia", "Larnaca", "Limassol", "Nicosia", "Paphos"]
      },
      {
        "country": "Czech Republic",
        "states": ["Jihocesky Kraj", "Jihomoravsky Kraj", "Karlovarsky Kraj", "Kralovehradecky Kraj", "Liberecky Kraj", "Moravskoslezsky Kraj", "Olomoucky Kraj", "Pardubicky Kraj", "Plzensky Kraj", "Praha", "Stredocesky Kraj", "Ustecky Kraj", "Vysocina", "Zlinsky Kraj"]
      },
      {
        "country": "Denmark",
        "states": ["Arhus", "Bornholm", "Frederiksberg", "Frederiksborg", "Fyn", "Kobenhavn", "Kobenhavns", "Nordjylland", "Ribe", "Ringkobing", "Roskilde", "Sonderjylland", "Storstrom", "Vejle", "Vestsjalland", "Viborg"]
      },
      {
        "country": "Djibouti",
        "states": ["Ali Sabih", "Dikhil", "Djibouti", "Obock", "Tadjoura"]
      },
      {
        "country": "Dominica",
        "states": ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"]
      },
      {
        "country": "Dominican Republic",
        "states": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "Elias Pina", "El Seibo", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "Sanchez Ramirez", "San Cristobal", "San Jose de Ocoa", "San Juan", "San Pedro de Macoris", "Santiago", "Santiago Rodriguez", "Santo Domingo", "Valverde"]
      },
      {
        "country": "East Timor",
        "states": ["Aileu", "Ainaro", "Baucau", "Bobonaro", "Cova-Lima", "Dili", "Ermera", "Lautem", "Liquica", "Manatuto", "Manufahi", "Oecussi", "Viqueque"]
      },
      {
        "country": "Ecuador",
        "states": ["Azuay", "Bolivar", "Canar", "Carchi", "Chimborazo", "Cotopaxi", "El Oro", "Esmeraldas", "Galapagos", "Guayas", "Imbabura", "Loja", "Los Rios", "Manabi", "Morona-Santiago", "Napo", "Orellana", "Pastaza", "Pichincha", "Sucumbios", "Tungurahua", "Zamora-Chinchipe"]
      },
      {
        "country": "Egypt",
        "states": ["Ad Daqahliyah", "Al Bahr al Ahmar", "Al Buhayrah", "Al Fayyum", "Al Gharbiyah", "Al Iskandariyah", "Al Isma'iliyah", "Al Jizah", "Al Minufiyah", "Al Minya", "Al Qahirah", "Al Qalyubiyah", "Al Wadi al Jadid", "Ash Sharqiyah", "As Suways", "Aswan", "Asyut", "Bani Suwayf", "Bur Sa'id", "Dumyat", "Janub Sina'", "Kafr ash Shaykh", "Matruh", "Qina", "Shamal Sina'", "Suhaj"]
      },
      {
        "country": "El Salvador",
        "states": ["Ahuachapan", "Cabanas", "Chalatenango", "Cuscatlan", "La Libertad", "La Paz", "La Union", "Morazan", "San Miguel", "San Salvador", "Santa Ana", "San Vicente", "Sonsonate", "Usulutan"]
      },
      {
        "country": "Equatorial Guinea",
        "states": ["Annobon", "Bioko Norte", "Bioko Sur", "Centro Sur", "Kie-Ntem", "Litoral", "Wele-Nzas"]
      },
      {
        "country": "Eritrea",
        "states": ["Anseba", "Debub", "Debubawi K'eyih Bahri", "Gash Barka", "Ma'akel", "Semenawi Keyih Bahri"]
      },
      {
        "country": "Estonia",
        "states": ["Harjumaa (Tallinn)", "Hiiumaa (Kardla)", "Ida-Virumaa (Johvi)", "Jarvamaa (Paide)", "Jogevamaa (Jogeva)", "Laanemaa (Haapsalu)", "Laane-Virumaa (Rakvere)", "Parnumaa (Parnu)", "Polvamaa (Polva)", "Raplamaa (Rapla)", "Saaremaa (Kuressaare)", "Tartumaa (Tartu)", "Valgamaa (Valga)", "Viljandimaa (Viljandi)", "Vorumaa (Voru)"]
      },
      {
        "country": "Ethiopia",
        "states": ["Addis Ababa", "Afar", "Amhara", "Binshangul Gumuz", "Dire Dawa", "Gambela Hizboch", "Harari", "Oromia", "Somali", "Tigray", "Southern Nations, Nationalities, and Peoples Region"]
      },
      {
        "country": "Fiji",
        "states": ["Central (Suva)", "Eastern (Levuka)", "Northern (Labasa)", "Rotuma", "Western (Lautoka)"]
      },
      {
        "country": "Finland",
        "states": ["Aland", "Etela-Suomen Laani", "Ita-Suomen Laani", "Lansi-Suomen Laani", "Lappi", "Oulun Laani"]
      },
      {
        "country": "France",
        "states": ["Alsace", "Aquitaine", "Auvergne", "Basse-Normandie", "Bourgogne", "Bretagne", "Centre", "Champagne-Ardenne", "Corse", "Franche-Comte", "Haute-Normandie", "Ile-de-France", "Languedoc-Roussillon", "Limousin", "Lorraine", "Midi-Pyrenees", "Nord-Pas-de-Calais", "Pays de la Loire", "Picardie", "Poitou-Charentes", "Provence-Alpes-Cote d'Azur", "Rhone-Alpes"]
      },
      {
        "country": "Gabon",
        "states": ["Estuaire", "Haut-Ogooue", "Moyen-Ogooue", "Ngounie", "Nyanga", "Ogooue-Ivindo", "Ogooue-Lolo", "Ogooue-Maritime", "Woleu-Ntem"]
      },
      {
        "country": "Gambia",
        "states": ["Banjul", "Central River", "Lower River", "North Bank", "Upper River", "Western"]
      },
      {
        "country": "Georgia",
        "states": []
      },
      {
        "country": "Germany",
        "states": ["Baden-Wuerttemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt", "Schleswig-Holstein", "Thueringen"]
      },
      {
        "country": "Ghana",
        "states": ["Ashanti", "Brong-Ahafo", "Central", "Eastern", "Greater Accra", "Northern", "Upper East", "Upper West", "Volta", "Western"]
      },
      {
        "country": "Greece",
        "states": ["Agion Oros", "Achaia", "Aitolia kai Akarmania", "Argolis", "Arkadia", "Arta", "Attiki", "Chalkidiki", "Chanion", "Chios", "Dodekanisos", "Drama", "Evros", "Evrytania", "Evvoia", "Florina", "Fokidos", "Fthiotis", "Grevena", "Ileia", "Imathia", "Ioannina", "Irakleion", "Karditsa", "Kastoria", "Kavala", "Kefallinia", "Kerkyra", "Kilkis", "Korinthia", "Kozani", "Kyklades", "Lakonia", "Larisa", "Lasithi", "Lefkas", "Lesvos", "Magnisia", "Messinia", "Pella", "Pieria", "Preveza", "Rethynnis", "Rodopi", "Samos", "Serrai", "Thesprotia", "Thessaloniki", "Trikala", "Voiotia", "Xanthi", "Zakynthos"]
      },
      {
        "country": "Greenland",
        "states": ["Avannaa (Nordgronland)", "Tunu (Ostgronland)", "Kitaa (Vestgronland)"]
      },
      {
        "country": "Grenada",
        "states": ["Carriacou and Petit Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"]
      },
      {
        "country": "Guatemala",
        "states": ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "El Progreso", "Escuintla", "Guatemala", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa", "Peten", "Quetzaltenango", "Quiche", "Retalhuleu", "Sacatepequez", "San Marcos", "Santa Rosa", "Solola", "Suchitepequez", "Totonicapan", "Zacapa"]
      },
      {
        "country": "Guinea",
        "states": ["Beyla", "Boffa", "Boke", "Conakry", "Coyah", "Dabola", "Dalaba", "Dinguiraye", "Dubreka", "Faranah", "Forecariah", "Fria", "Gaoual", "Gueckedou", "Kankan", "Kerouane", "Kindia", "Kissidougou", "Koubia", "Koundara", "Kouroussa", "Labe", "Lelouma", "Lola", "Macenta", "Mali", "Mamou", "Mandiana", "Nzerekore", "Pita", "Siguiri", "Telimele", "Tougue", "Yomou"]
      },
      {
        "country": "Guinea-Bissau",
        "states": ["Bafata", "Biombo", "Bissau", "Bolama", "Cacheu", "Gabu", "Oio", "Quinara", "Tombali"]
      },
      {
        "country": "Guyana",
        "states": ["Barima-Waini", "Cuyuni-Mazaruni", "Demerara-Mahaica", "East Berbice-Corentyne", "Essequibo Islands-West Demerara", "Mahaica-Berbice", "Pomeroon-Supenaam", "Potaro-Siparuni", "Upper Demerara-Berbice", "Upper Takutu-Upper Essequibo"]
      },
      {
        "country": "Haiti",
        "states": ["Artibonite", "Centre", "Grand 'Anse", "Nord", "Nord-Est", "Nord-Ouest", "Ouest", "Sud", "Sud-Est"]
      },
      {
        "country": "Honduras",
        "states": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"]
      },
      {
        "country": "Hong Kong",
        "states": []
      },
      {
        "country": "Hungary",
        "states": ["Bacs-Kiskun", "Baranya", "Bekes", "Borsod-Abauj-Zemplen", "Csongrad", "Fejer", "Gyor-Moson-Sopron", "Hajdu-Bihar", "Heves", "Jasz-Nagykun-Szolnok", "Komarom-Esztergom", "Nograd", "Pest", "Somogy", "Szabolcs-Szatmar-Bereg", "Tolna", "Vas", "Veszprem", "Zala", "Bekescsaba", "Debrecen", "Dunaujvaros", "Eger", "Gyor", "Hodmezovasarhely", "Kaposvar", "Kecskemet", "Miskolc", "Nagykanizsa", "Nyiregyhaza", "Pecs", "Sopron", "Szeged", "Szekesfehervar", "Szolnok", "Szombathely", "Tatabanya", "Veszprem", "Zalaegerszeg"]
      },
      {
        "country": "Iceland",
        "states": ["Austurland", "Hofudhborgarsvaedhi", "Nordhurland Eystra", "Nordhurland Vestra", "Sudhurland", "Sudhurnes", "Vestfirdhir", "Vesturland"]
      },
      {
        "country": "India",
        "states": ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Tripura", "Uttaranchal", "Uttar Pradesh", "West Bengal"]
      },
      {
        "country": "Indonesia",
        "states": ["Aceh", "Bali", "Banten", "Bengkulu", "Gorontalo", "Irian Jaya Barat", "Jakarta Raya", "Jambi", "Jawa Barat", "Jawa Tengah", "Jawa Timur", "Kalimantan Barat", "Kalimantan Selatan", "Kalimantan Tengah", "Kalimantan Timur", "Kepulauan Bangka Belitung", "Kepulauan Riau", "Lampung", "Maluku", "Maluku Utara", "Nusa Tenggara Barat", "Nusa Tenggara Timur", "Papua", "Riau", "Sulawesi Barat", "Sulawesi Selatan", "Sulawesi Tengah", "Sulawesi Tenggara", "Sulawesi Utara", "Sumatera Barat", "Sumatera Selatan", "Sumatera Utara", "Yogyakarta"]
      },
      {
        "country": "Iran",
        "states": ["Ardabil", "Azarbayjan-e Gharbi", "Azarbayjan-e Sharqi", "Bushehr", "Chahar Mahall va Bakhtiari", "Esfahan", "Fars", "Gilan", "Golestan", "Hamadan", "Hormozgan", "Ilam", "Kerman", "Kermanshah", "Khorasan-e Janubi", "Khorasan-e Razavi", "Khorasan-e Shemali", "Khuzestan", "Kohgiluyeh va Buyer Ahmad", "Kordestan", "Lorestan", "Markazi", "Mazandaran", "Qazvin", "Qom", "Semnan", "Sistan va Baluchestan", "Tehran", "Yazd", "Zanjan"]
      },
      {
        "country": "Iraq",
        "states": ["Al Anbar", "Al Basrah", "Al Muthanna", "Al Qadisiyah", "An Najaf", "Arbil", "As Sulaymaniyah", "At Ta'mim", "Babil", "Baghdad", "Dahuk", "Dhi Qar", "Diyala", "Karbala'", "Maysan", "Ninawa", "Salah ad Din", "Wasit"]
      },
      {
        "country": "Ireland",
        "states": ["Carlow", "Cavan", "Clare", "Cork", "Donegal", "Dublin", "Galway", "Kerry", "Kildare", "Kilkenny", "Laois", "Leitrim", "Limerick", "Longford", "Louth", "Mayo", "Meath", "Monaghan", "Offaly", "Roscommon", "Sligo", "Tipperary", "Waterford", "Westmeath", "Wexford", "Wicklow"]
      },
      {
        "country": "Israel",
        "states": ["Central", "Haifa", "Jerusalem", "Northern", "Southern", "Tel Aviv"]
      },
      {
        "country": "Italy",
        "states": ["Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche", "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana", "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto"]
      },
      {
        "country": "Jamaica",
        "states": ["Clarendon", "Hanover", "Kingston", "Manchester", "Portland", "Saint Andrew", "Saint Ann", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"]
      },
      {
        "country": "Japan",
        "states": ["Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gumma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"]
      },
      {
        "country": "Jordan",
        "states": ["Ajlun", "Al 'Aqabah", "Al Balqa'", "Al Karak", "Al Mafraq", "'Amman", "At Tafilah", "Az Zarqa'", "Irbid", "Jarash", "Ma'an", "Madaba"]
      },
      {
        "country": "Kazakhstan",
        "states": ["Almaty Oblysy", "Almaty Qalasy", "Aqmola Oblysy", "Aqtobe Oblysy", "Astana Qalasy", "Atyrau Oblysy", "Batys Qazaqstan Oblysy", "Bayqongyr Qalasy", "Mangghystau Oblysy", "Ongtustik Qazaqstan Oblysy", "Pavlodar Oblysy", "Qaraghandy Oblysy", "Qostanay Oblysy", "Qyzylorda Oblysy", "Shyghys Qazaqstan Oblysy", "Soltustik Qazaqstan Oblysy", "Zhambyl Oblysy"]
      },
      {
        "country": "Kenya",
        "states": ["Central", "Coast", "Eastern", "Nairobi Area", "North Eastern", "Nyanza", "Rift Valley", "Western"]
      },
      {
        "country": "Kiribati",
        "states": []
      },
      {
        "country": "Korea North",
        "states": ["Chagang", "North Hamgyong", "South Hamgyong", "North Hwanghae", "South Hwanghae", "Kangwon", "North P'yongan", "South P'yongan", "Yanggang", "Kaesong", "Najin", "Namp'o", "Pyongyang"]
      },
      {
        "country": "Korea South",
        "states": ["Seoul", "Busan City", "Daegu City", "Incheon City", "Gwangju City", "Daejeon City", "Ulsan", "Gyeonggi Province", "Gangwon Province", "North Chungcheong Province", "South Chungcheong Province", "North Jeolla Province", "South Jeolla Province", "North Gyeongsang Province", "South Gyeongsang Province", "Jeju"]
      },
      {
        "country": "Kuwait",
        "states": ["Al Ahmadi", "Al Farwaniyah", "Al Asimah", "Al Jahra", "Hawalli", "Mubarak Al-Kabeer"]
      },
      {
        "country": "Kyrgyzstan",
        "states": ["Batken Oblasty", "Bishkek Shaary", "Chuy Oblasty", "Jalal-Abad Oblasty", "Naryn Oblasty", "Osh Oblasty", "Talas Oblasty", "Ysyk-Kol Oblasty"]
      },
      {
        "country": "Laos",
        "states": ["Attapu", "Bokeo", "Bolikhamxai", "Champasak", "Houaphan", "Khammouan", "Louangnamtha", "Louangphrabang", "Oudomxai", "Phongsali", "Salavan", "Savannakhet", "Viangchan", "Viangchan", "Xaignabouli", "Xaisomboun", "Xekong", "Xiangkhoang"]
      },
      {
        "country": "Latvia",
        "states": ["Aizkraukles Rajons", "Aluksnes Rajons", "Balvu Rajons", "Bauskas Rajons", "Cesu Rajons", "Daugavpils", "Daugavpils Rajons", "Dobeles Rajons", "Gulbenes Rajons", "Jekabpils Rajons", "Jelgava", "Jelgavas Rajons", "Jurmala", "Kraslavas Rajons", "Kuldigas Rajons", "Liepaja", "Liepajas Rajons", "Limbazu Rajons", "Ludzas Rajons", "Madonas Rajons", "Ogres Rajons", "Preilu Rajons", "Rezekne", "Rezeknes Rajons", "Riga", "Rigas Rajons", "Saldus Rajons", "Talsu Rajons", "Tukuma Rajons", "Valkas Rajons", "Valmieras Rajons", "Ventspils", "Ventspils Rajons"]
      },
      {
        "country": "Lebanon",
        "states": ["Beyrouth", "Beqaa", "Liban-Nord", "Liban-Sud", "Mont-Liban", "Nabatiye"]
      },
      {
        "country": "Lesotho",
        "states": ["Berea", "Butha-Buthe", "Leribe", "Mafeteng", "Maseru", "Mohale's Hoek", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"]
      },
      {
        "country": "Liberia",
        "states": ["Bomi", "Bong", "Gbarpolu", "Grand Bassa", "Grand Cape Mount", "Grand Gedeh", "Grand Kru", "Lofa", "Margibi", "Maryland", "Montserrado", "Nimba", "River Cess", "River Gee", "Sinoe"]
      },
      {
        "country": "Libya",
        "states": ["Ajdabiya", "Al 'Aziziyah", "Al Fatih", "Al Jabal al Akhdar", "Al Jufrah", "Al Khums", "Al Kufrah", "An Nuqat al Khams", "Ash Shati'", "Awbari", "Az Zawiyah", "Banghazi", "Darnah", "Ghadamis", "Gharyan", "Misratah", "Murzuq", "Sabha", "Sawfajjin", "Surt", "Tarabulus", "Tarhunah", "Tubruq", "Yafran", "Zlitan"]
      },
      {
        "country": "Liechtenstein",
        "states": ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"]
      },
      {
        "country": "Lithuania",
        "states": ["Alytaus", "Kauno", "Klaipedos", "Marijampoles", "Panevezio", "Siauliu", "Taurages", "Telsiu", "Utenos", "Vilniaus"]
      },
      {
        "country": "Luxembourg",
        "states": ["Diekirch", "Grevenmacher", "Luxembourg"]
      },
      {
        "country": "Macedonia",
        "states": ["Aerodrom", "Aracinovo", "Berovo", "Bitola", "Bogdanci", "Bogovinje", "Bosilovo", "Brvenica", "Butel", "Cair", "Caska", "Centar", "Centar Zupa", "Cesinovo", "Cucer-Sandevo", "Debar", "Debartsa", "Delcevo", "Demir Hisar", "Demir Kapija", "Dojran", "Dolneni", "Drugovo", "Gazi Baba", "Gevgelija", "Gjorce Petrov", "Gostivar", "Gradsko", "Ilinden", "Jegunovce", "Karbinci", "Karpos", "Kavadarci", "Kicevo", "Kisela Voda", "Kocani", "Konce", "Kratovo", "Kriva Palanka", "Krivogastani", "Krusevo", "Kumanovo", "Lipkovo", "Lozovo", "Makedonska Kamenica", "Makedonski Brod", "Mavrovo i Rastusa", "Mogila", "Negotino", "Novaci", "Novo Selo", "Ohrid", "Oslomej", "Pehcevo", "Petrovec", "Plasnica", "Prilep", "Probistip", "Radovis", "Rankovce", "Resen", "Rosoman", "Saraj", "Skopje", "Sopiste", "Staro Nagoricane", "Stip", "Struga", "Strumica", "Studenicani", "Suto Orizari", "Sveti Nikole", "Tearce", "Tetovo", "Valandovo", "Vasilevo", "Veles", "Vevcani", "Vinica", "Vranestica", "Vrapciste", "Zajas", "Zelenikovo", "Zelino", "Zrnovci"]
      },
      {
        "country": "Madagascar",
        "states": ["Antananarivo", "Antsiranana", "Fianarantsoa", "Mahajanga", "Toamasina", "Toliara"]
      },
      {
        "country": "Malawi",
        "states": ["Balaka", "Blantyre", "Chikwawa", "Chiradzulu", "Chitipa", "Dedza", "Dowa", "Karonga", "Kasungu", "Likoma", "Lilongwe", "Machinga", "Mangochi", "Mchinji", "Mulanje", "Mwanza", "Mzimba", "Ntcheu", "Nkhata Bay", "Nkhotakota", "Nsanje", "Ntchisi", "Phalombe", "Rumphi", "Salima", "Thyolo", "Zomba"]
      },
      {
        "country": "Malaysia",
        "states": ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Malacca", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Penang", "Sabah", "Sarawak", "Selangor", "Terengganu"]
      },
      {
        "country": "Maldives",
        "states": ["Alifu", "Baa", "Dhaalu", "Faafu", "Gaafu Alifu", "Gaafu Dhaalu", "Gnaviyani", "Haa Alifu", "Haa Dhaalu", "Kaafu", "Laamu", "Lhaviyani", "Maale", "Meemu", "Noonu", "Raa", "Seenu", "Shaviyani", "Thaa", "Vaavu"]
      },
      {
        "country": "Mali",
        "states": ["Bamako (Capital)", "Gao", "Kayes", "Kidal", "Koulikoro", "Mopti", "Segou", "Sikasso", "Tombouctou"]
      },
      {
        "country": "Malta",
        "states": []
      },
      {
        "country": "Marshall Islands",
        "states": []
      },
      {
        "country": "Mauritania",
        "states": ["Adrar", "Assaba", "Brakna", "Dakhlet Nouadhibou", "Gorgol", "Guidimaka", "Hodh Ech Chargui", "Hodh El Gharbi", "Inchiri", "Nouakchott", "Tagant", "Tiris Zemmour", "Trarza"]
      },
      {
        "country": "Mauritius",
        "states": ["Agalega Islands", "Black River", "Cargados Carajos Shoals", "Flacq", "Grand Port", "Moka", "Pamplemousses", "Plaines Wilhems", "Port Louis", "Riviere du Rempart", "Rodrigues", "Savanne"]
      },
      {
        "country": "Mexico",
        "states": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"]
      },
      {
        "country": "Micronesia",
        "states": []
      },
      {
        "country": "Moldova",
        "states": ["Anenii Noi", "Basarabeasca", "Briceni", "Cahul", "Cantemir", "Calarasi", "Causeni", "Cimislia", "Criuleni", "Donduseni", "Drochia", "Dubasari", "Edinet", "Falesti", "Floresti", "Glodeni", "Hincesti", "Ialoveni", "Leova", "Nisporeni", "Ocnita", "Orhei", "Rezina", "Riscani", "Singerei", "Soldanesti", "Soroca", "Stefan-Voda", "Straseni", "Taraclia", "Telenesti", "Ungheni", "Balti", "Bender", "Chisinau", "Gagauzia", "Stinga Nistrului"]
      },
      {
        "country": "Mongolia",
        "states": ["Arhangay", "Bayanhongor", "Bayan-Olgiy", "Bulgan", "Darhan Uul", "Dornod", "Dornogovi", "Dundgovi", "Dzavhan", "Govi-Altay", "Govi-Sumber", "Hentiy", "Hovd", "Hovsgol", "Omnogovi", "Orhon", "Ovorhangay", "Selenge", "Suhbaatar", "Tov", "Ulaanbaatar", "Uvs"]
      },
      {
        "country": "Morocco",
        "states": ["Agadir", "Al Hoceima", "Azilal", "Beni Mellal", "Ben Slimane", "Boulemane", "Casablanca", "Chaouen", "El Jadida", "El Kelaa des Sraghna", "Er Rachidia", "Essaouira", "Fes", "Figuig", "Guelmim", "Ifrane", "Kenitra", "Khemisset", "Khenifra", "Khouribga", "Laayoune", "Larache", "Marrakech", "Meknes", "Nador", "Ouarzazate", "Oujda", "Rabat-Sale", "Safi", "Settat", "Sidi Kacem", "Tangier", "Tan-Tan", "Taounate", "Taroudannt", "Tata", "Taza", "Tetouan", "Tiznit"]
      },
      {
        "country": "Monaco",
        "states": []
      },
      {
        "country": "Mozambique",
        "states": ["Cabo Delgado", "Gaza", "Inhambane", "Manica", "Maputo", "Cidade de Maputo", "Nampula", "Niassa", "Sofala", "Tete", "Zambezia"]
      },
      {
        "country": "Namibia",
        "states": ["Caprivi", "Erongo", "Hardap", "Karas", "Khomas", "Kunene", "Ohangwena", "Okavango", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa"]
      },
      {
        "country": "Nauru",
        "states": []
      },
      {
        "country": "Nepal",
        "states": ["Bagmati", "Bheri", "Dhawalagiri", "Gandaki", "Janakpur", "Karnali", "Kosi", "Lumbini", "Mahakali", "Mechi", "Narayani", "Rapti", "Sagarmatha", "Seti"]
      },
      {
        "country": "Netherlands",
        "states": ["Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg", "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland", "Zuid-Holland"]
      },
      {
        "country": "New Zealand",
        "states": ["Auckland", "Bay of Plenty", "Canterbury", "Chatham Islands", "Gisborne", "Hawke's Bay", "Manawatu-Wanganui", "Marlborough", "Nelson", "Northland", "Otago", "Southland", "Taranaki", "Tasman", "Waikato", "Wellington", "West Coast"]
      },
      {
        "country": "Nicaragua",
        "states": ["Atlantico Norte", "Atlantico Sur", "Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Granada", "Jinotega", "Leon", "Madriz", "Managua", "Masaya", "Matagalpa", "Nueva Segovia", "Rio San Juan", "Rivas"]
      },
      {
        "country": "Niger",
        "states": ["Agadez", "Diffa", "Dosso", "Maradi", "Niamey", "Tahoua", "Tillaberi", "Zinder"]
      },
      {
        "country": "Nigeria",
        "states": ["Abia", "Abuja Federal Capital", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]
      },
      {
        "country": "Norway",
        "states": ["Akershus", "Aust-Agder", "Buskerud", "Finnmark", "Hedmark", "Hordaland", "More og Romsdal", "Nordland", "Nord-Trondelag", "Oppland", "Oslo", "Ostfold", "Rogaland", "Sogn og Fjordane", "Sor-Trondelag", "Telemark", "Troms", "Vest-Agder", "Vestfold"]
      },
      {
        "country": "Oman",
        "states": ["Ad Dakhiliyah", "Al Batinah", "Al Wusta", "Ash Sharqiyah", "Az Zahirah", "Masqat", "Musandam", "Dhofar"]
      },
      {
        "country": "Pakistan",
        "states": ["Balochistan", "North-West Frontier Province", "Punjab", "Sindh", "Islamabad Capital Territory", "Federally Administered Tribal Areas"]
      },
      {
        "country": "Panama",
        "states": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"]
      },
      {
        "country": "Papua New Guinea",
        "states": ["Bougainville", "Central", "Chimbu", "Eastern Highlands", "East New Britain", "East Sepik", "Enga", "Gulf", "Madang", "Manus", "Milne Bay", "Morobe", "National Capital", "New Ireland", "Northern", "Sandaun", "Southern Highlands", "Western", "Western Highlands", "West New Britain"]
      },
      {
        "country": "Paraguay",
        "states": ["Alto Paraguay", "Alto Parana", "Amambay", "Asuncion", "Boqueron", "Caaguazu", "Caazapa", "Canindeyu", "Central", "Concepcion", "Cordillera", "Guaira", "Itapua", "Misiones", "Neembucu", "Paraguari", "Presidente Hayes", "San Pedro"]
      },
      {
        "country": "Peru",
        "states": ["Amazonas", "Ancash", "Apurimac", "Arequipa", "Ayacucho", "Cajamarca", "Callao", "Cusco", "Huancavelica", "Huanuco", "Ica", "Junin", "La Libertad", "Lambayeque", "Lima", "Loreto", "Madre de Dios", "Moquegua", "Pasco", "Piura", "Puno", "San Martin", "Tacna", "Tumbes", "Ucayali"]
      },
      {
        "country": "Philippines",
        "states": ["Abra", "Agusan del Norte", "Agusan del Sur", "Aklan", "Albay", "Antique", "Apayao", "Aurora", "Basilan", "Bataan", "Batanes", "Batangas", "Biliran", "Benguet", "Bohol", "Bukidnon", "Bulacan", "Cagayan", "Camarines Norte", "Camarines Sur", "Camiguin", "Capiz", "Catanduanes", "Cavite", "Cebu", "Compostela", "Davao del Norte", "Davao del Sur", "Davao Oriental", "Eastern Samar", "Guimaras", "Ifugao", "Ilocos Norte", "Ilocos Sur", "Iloilo", "Isabela", "Kalinga", "Laguna", "Lanao del Norte", "Lanao del Sur", "La Union", "Leyte", "Maguindanao", "Marinduque", "Masbate", "Mindoro Occidental", "Mindoro Oriental", "Misamis Occidental", "Misamis Oriental", "Mountain Province", "Negros Occidental", "Negros Oriental", "North Cotabato", "Northern Samar", "Nueva Ecija", "Nueva Vizcaya", "Palawan", "Pampanga", "Pangasinan", "Quezon", "Quirino", "Rizal", "Romblon", "Samar", "Sarangani", "Siquijor", "Sorsogon", "South Cotabato", "Southern Leyte", "Sultan Kudarat", "Sulu", "Surigao del Norte", "Surigao del Sur", "Tarlac", "Tawi-Tawi", "Zambales", "Zamboanga del Norte", "Zamboanga del Sur", "Zamboanga Sibugay"]
      },
      {
        "country": "Poland",
        "states": ["Greater Poland (Wielkopolskie)", "Kuyavian-Pomeranian (Kujawsko-Pomorskie)", "Lesser Poland (Malopolskie)", "Lodz (Lodzkie)", "Lower Silesian (Dolnoslaskie)", "Lublin (Lubelskie)", "Lubusz (Lubuskie)", "Masovian (Mazowieckie)", "Opole (Opolskie)", "Podlasie (Podlaskie)", "Pomeranian (Pomorskie)", "Silesian (Slaskie)", "Subcarpathian (Podkarpackie)", "Swietokrzyskie (Swietokrzyskie)", "Warmian-Masurian (Warminsko-Mazurskie)", "West Pomeranian (Zachodniopomorskie)"]
      },
      {
        "country": "Portugal",
        "states": ["Aveiro", "Acores", "Beja", "Braga", "Braganca", "Castelo Branco", "Coimbra", "Evora", "Faro", "Guarda", "Leiria", "Lisboa", "Madeira", "Portalegre", "Porto", "Santarem", "Setubal", "Viana do Castelo", "Vila Real", "Viseu"]
      },
      {
        "country": "Qatar",
        "states": ["Ad Dawhah", "Al Ghuwayriyah", "Al Jumayliyah", "Al Khawr", "Al Wakrah", "Ar Rayyan", "Jarayan al Batinah", "Madinat ash Shamal", "Umm Sa'id", "Umm Salal"]
      },
      {
        "country": "Romania",
        "states": ["Alba", "Arad", "Arges", "Bacau", "Bihor", "Bistrita-Nasaud", "Botosani", "Braila", "Brasov", "Bucuresti", "Buzau", "Calarasi", "Caras-Severin", "Cluj", "Constanta", "Covasna", "Dimbovita", "Dolj", "Galati", "Gorj", "Giurgiu", "Harghita", "Hunedoara", "Ialomita", "Iasi", "Ilfov", "Maramures", "Mehedinti", "Mures", "Neamt", "Olt", "Prahova", "Salaj", "Satu Mare", "Sibiu", "Suceava", "Teleorman", "Timis", "Tulcea", "Vaslui", "Vilcea", "Vrancea"]
      },
      {
        "country": "Russia",
        "states": ["Amur", "Arkhangel'sk", "Astrakhan'", "Belgorod", "Bryansk", "Chelyabinsk", "Chita", "Irkutsk", "Ivanovo", "Kaliningrad", "Kaluga", "Kamchatka", "Kemerovo", "Kirov", "Kostroma", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Moscow", "Murmansk", "Nizhniy Novgorod", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Orel", "Penza", "Perm'", "Pskov", "Rostov", "Ryazan'", "Sakhalin", "Samara", "Saratov", "Smolensk", "Sverdlovsk", "Tambov", "Tomsk", "Tula", "Tver'", "Tyumen'", "Ul'yanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yaroslavl'", "Adygeya", "Altay", "Bashkortostan", "Buryatiya", "Chechnya", "Chuvashiya", "Dagestan", "Ingushetiya", "Kabardino-Balkariya", "Kalmykiya", "Karachayevo-Cherkesiya", "Kareliya", "Khakasiya", "Komi", "Mariy-El", "Mordoviya", "Sakha", "North Ossetia", "Tatarstan", "Tyva", "Udmurtiya", "Aga Buryat", "Chukotka", "Evenk", "Khanty-Mansi", "Komi-Permyak", "Koryak", "Nenets", "Taymyr", "Ust'-Orda Buryat", "Yamalo-Nenets", "Altay", "Khabarovsk", "Krasnodar", "Krasnoyarsk", "Primorskiy", "Stavropol'", "Moscow", "St. Petersburg", "Yevrey"]
      },
      {
        "country": "Rwanda",
        "states": ["Butare", "Byumba", "Cyangugu", "Gikongoro", "Gisenyi", "Gitarama", "Kibungo", "Kibuye", "Kigali Rurale", "Kigali-ville", "Umutara", "Ruhengeri"]
      },
      {
        "country": "Samoa",
        "states": ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gagaifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"]
      },
      {
        "country": "San Marino",
        "states": ["Acquaviva", "Borgo Maggiore", "Chiesanuova", "Domagnano", "Faetano", "Fiorentino", "Montegiardino", "San Marino Citta", "Serravalle"]
      },
      {
        "country": "Sao Tome",
        "states": []
      },
      {
        "country": "Saudi Arabia",
        "states": ["Al Bahah", "Al Hudud ash Shamaliyah", "Al Jawf", "Al Madinah", "Al Qasim", "Ar Riyad", "Ash Sharqiyah", "'Asir", "Ha'il", "Jizan", "Makkah", "Najran", "Tabuk"]
      },
      {
        "country": "Senegal",
        "states": ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Saint-Louis", "Tambacounda", "Thies", "Ziguinchor"]
      },
      {
        "country": "Serbia and Montenegro",
        "states": ["Kosovo", "Montenegro", "Serbia", "Vojvodina"]
      },
      {
        "country": "Seychelles",
        "states": ["Anse aux Pins", "Anse Boileau", "Anse Etoile", "Anse Louis", "Anse Royale", "Baie Lazare", "Baie Sainte Anne", "Beau Vallon", "Bel Air", "Bel Ombre", "Cascade", "Glacis", "Grand' Anse", "Grand' Anse", "La Digue", "La Riviere Anglaise", "Mont Buxton", "Mont Fleuri", "Plaisance", "Pointe La Rue", "Port Glaud", "Saint Louis", "Takamaka"]
      },
      {
        "country": "Sierra Leone",
        "states": []
      },
      {
        "country": "Singapore",
        "states": []
      },
      {
        "country": "Slovakia",
        "states": ["Banskobystricky", "Bratislavsky", "Kosicky", "Nitriansky", "Presovsky", "Trenciansky", "Trnavsky", "Zilinsky"]
      },
      {
        "country": "Slovenia",
        "states": ["Ajdovscina", "Beltinci", "Benedikt", "Bistrica ob Sotli", "Bled", "Bloke", "Bohinj", "Borovnica", "Bovec", "Braslovce", "Brda", "Brezice", "Brezovica", "Cankova", "Celje", "Cerklje na Gorenjskem", "Cerknica", "Cerkno", "Cerkvenjak", "Crensovci", "Crna na Koroskem", "Crnomelj", "Destrnik", "Divaca", "Dobje", "Dobrepolje", "Dobrna", "Dobrova-Horjul-Polhov Gradec", "Dobrovnik-Dobronak", "Dolenjske Toplice", "Dol pri Ljubljani", "Domzale", "Dornava", "Dravograd", "Duplek", "Gorenja Vas-Poljane", "Gorisnica", "Gornja Radgona", "Gornji Grad", "Gornji Petrovci", "Grad", "Grosuplje", "Hajdina", "Hoce-Slivnica", "Hodos-Hodos", "Horjul", "Hrastnik", "Hrpelje-Kozina", "Idrija", "Ig", "Ilirska Bistrica", "Ivancna Gorica", "Izola-Isola", "Jesenice", "Jezersko", "Jursinci", "Kamnik", "Kanal", "Kidricevo", "Kobarid", "Kobilje", "Kocevje", "Komen", "Komenda", "Koper-Capodistria", "Kostel", "Kozje", "Kranj", "Kranjska Gora", "Krizevci", "Krsko", "Kungota", "Kuzma", "Lasko", "Lenart", "Lendava-Lendva", "Litija", "Ljubljana", "Ljubno", "Ljutomer", "Logatec", "Loska Dolina", "Loski Potok", "Lovrenc na Pohorju", "Luce", "Lukovica", "Majsperk", "Maribor", "Markovci", "Medvode", "Menges", "Metlika", "Mezica", "Miklavz na Dravskem Polju", "Miren-Kostanjevica", "Mirna Pec", "Mislinja", "Moravce", "Moravske Toplice", "Mozirje", "Murska Sobota", "Muta", "Naklo", "Nazarje", "Nova Gorica", "Novo Mesto", "Odranci", "Oplotnica", "Ormoz", "Osilnica", "Pesnica", "Piran-Pirano", "Pivka", "Podcetrtek", "Podlehnik", "Podvelka", "Polzela", "Postojna", "Prebold", "Preddvor", "Prevalje", "Ptuj", "Puconci", "Race-Fram", "Radece", "Radenci", "Radlje ob Dravi", "Radovljica", "Ravne na Koroskem", "Razkrizje", "Ribnica", "Ribnica na Pohorju", "Rogasovci", "Rogaska Slatina", "Rogatec", "Ruse", "Salovci", "Selnica ob Dravi", "Semic", "Sempeter-Vrtojba", "Sencur", "Sentilj", "Sentjernej", "Sentjur pri Celju", "Sevnica", "Sezana", "Skocjan", "Skofja Loka", "Skofljica", "Slovenj Gradec", "Slovenska Bistrica", "Slovenske Konjice", "Smarje pri Jelsah", "Smartno ob Paki", "Smartno pri Litiji", "Sodrazica", "Solcava", "Sostanj", "Starse", "Store", "Sveta Ana", "Sveti Andraz v Slovenskih Goricah", "Sveti Jurij", "Tabor", "Tisina", "Tolmin", "Trbovlje", "Trebnje", "Trnovska Vas", "Trzic", "Trzin", "Turnisce", "Velenje", "Velika Polana", "Velike Lasce", "Verzej", "Videm", "Vipava", "Vitanje", "Vodice", "Vojnik", "Vransko", "Vrhnika", "Vuzenica", "Zagorje ob Savi", "Zalec", "Zavrc", "Zelezniki", "Zetale", "Ziri", "Zirovnica", "Zuzemberk", "Zrece"]
      },
      {
        "country": "Solomon Islands",
        "states": ["Central", "Choiseul", "Guadalcanal", "Honiara", "Isabel", "Makira", "Malaita", "Rennell and Bellona", "Temotu", "Western"]
      },
      {
        "country": "Somalia",
        "states": ["Awdal", "Bakool", "Banaadir", "Bari", "Bay", "Galguduud", "Gedo", "Hiiraan", "Jubbada Dhexe", "Jubbada Hoose", "Mudug", "Nugaal", "Sanaag", "Shabeellaha Dhexe", "Shabeellaha Hoose", "Sool", "Togdheer", "Woqooyi Galbeed"]
      },
      {
        "country": "South Africa",
        "states": ["Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North-West", "Northern Cape", "Western Cape"]
      },
      {
        "country": "Spain",
        "states": ["Andalucia", "Aragon", "Asturias", "Baleares", "Ceuta", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y Leon", "Cataluna", "Comunidad Valenciana", "Extremadura", "Galicia", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco"]
      },
      {
        "country": "Sri Lanka",
        "states": ["Central", "North Central", "North Eastern", "North Western", "Sabaragamuwa", "Southern", "Uva", "Western"]
      },
      {
        "country": "Sudan",
        "states": ["A'ali an Nil", "Al Bahr al Ahmar", "Al Buhayrat", "Al Jazirah", "Al Khartum", "Al Qadarif", "Al Wahdah", "An Nil al Abyad", "An Nil al Azraq", "Ash Shamaliyah", "Bahr al Jabal", "Gharb al Istiwa'iyah", "Gharb Bahr al Ghazal", "Gharb Darfur", "Gharb Kurdufan", "Janub Darfur", "Janub Kurdufan", "Junqali", "Kassala", "Nahr an Nil", "Shamal Bahr al Ghazal", "Shamal Darfur", "Shamal Kurdufan", "Sharq al Istiwa'iyah", "Sinnar", "Warab"]
      },
      {
        "country": "Suriname",
        "states": ["Brokopondo", "Commewijne", "Coronie", "Marowijne", "Nickerie", "Para", "Paramaribo", "Saramacca", "Sipaliwini", "Wanica"]
      },
      {
        "country": "Swaziland",
        "states": ["Hhohho", "Lubombo", "Manzini", "Shiselweni"]
      },
      {
        "country": "Sweden",
        "states": ["Blekinge", "Dalarnas", "Gavleborgs", "Gotlands", "Hallands", "Jamtlands", "Jonkopings", "Kalmar", "Kronobergs", "Norrbottens", "Orebro", "Ostergotlands", "Skane", "Sodermanlands", "Stockholms", "Uppsala", "Varmlands", "Vasterbottens", "Vasternorrlands", "Vastmanlands", "Vastra Gotalands"]
      },
      {
        "country": "Switzerland",
        "states": ["Aargau", "Appenzell Ausser-Rhoden", "Appenzell Inner-Rhoden", "Basel-Landschaft", "Basel-Stadt", "Bern", "Fribourg", "Geneve", "Glarus", "Graubunden", "Jura", "Luzern", "Neuchatel", "Nidwalden", "Obwalden", "Sankt Gallen", "Schaffhausen", "Schwyz", "Solothurn", "Thurgau", "Ticino", "Uri", "Valais", "Vaud", "Zug", "Zurich"]
      },
      {
        "country": "Syria",
        "states": ["Al Hasakah", "Al Ladhiqiyah", "Al Qunaytirah", "Ar Raqqah", "As Suwayda'", "Dar'a", "Dayr az Zawr", "Dimashq", "Halab", "Hamah", "Hims", "Idlib", "Rif Dimashq", "Tartus"]
      },
      {
        "country": "Taiwan",
        "states": ["Chang-hua", "Chia-i", "Hsin-chu", "Hua-lien", "I-lan", "Kao-hsiung", "Kin-men", "Lien-chiang", "Miao-li", "Nan-t'ou", "P'eng-hu", "P'ing-tung", "T'ai-chung", "T'ai-nan", "T'ai-pei", "T'ai-tung", "T'ao-yuan", "Yun-lin", "Chia-i", "Chi-lung", "Hsin-chu", "T'ai-chung", "T'ai-nan", "Kao-hsiung city", "T'ai-pei city"]
      },
      {
        "country": "Tajikistan",
        "states": []
      },
      {
        "country": "Tanzania",
        "states": ["Arusha", "Dar es Salaam", "Dodoma", "Iringa", "Kagera", "Kigoma", "Kilimanjaro", "Lindi", "Manyara", "Mara", "Mbeya", "Morogoro", "Mtwara", "Mwanza", "Pemba North", "Pemba South", "Pwani", "Rukwa", "Ruvuma", "Shinyanga", "Singida", "Tabora", "Tanga", "Zanzibar Central/South", "Zanzibar North", "Zanzibar Urban/West"]
      },
      {
        "country": "Thailand",
        "states": ["Amnat Charoen", "Ang Thong", "Buriram", "Chachoengsao", "Chai Nat", "Chaiyaphum", "Chanthaburi", "Chiang Mai", "Chiang Rai", "Chon Buri", "Chumphon", "Kalasin", "Kamphaeng Phet", "Kanchanaburi", "Khon Kaen", "Krabi", "Krung Thep Mahanakhon", "Lampang", "Lamphun", "Loei", "Lop Buri", "Mae Hong Son", "Maha Sarakham", "Mukdahan", "Nakhon Nayok", "Nakhon Pathom", "Nakhon Phanom", "Nakhon Ratchasima", "Nakhon Sawan", "Nakhon Si Thammarat", "Nan", "Narathiwat", "Nong Bua Lamphu", "Nong Khai", "Nonthaburi", "Pathum Thani", "Pattani", "Phangnga", "Phatthalung", "Phayao", "Phetchabun", "Phetchaburi", "Phichit", "Phitsanulok", "Phra Nakhon Si Ayutthaya", "Phrae", "Phuket", "Prachin Buri", "Prachuap Khiri Khan", "Ranong", "Ratchaburi", "Rayong", "Roi Et", "Sa Kaeo", "Sakon Nakhon", "Samut Prakan", "Samut Sakhon", "Samut Songkhram", "Sara Buri", "Satun", "Sing Buri", "Sisaket", "Songkhla", "Sukhothai", "Suphan Buri", "Surat Thani", "Surin", "Tak", "Trang", "Trat", "Ubon Ratchathani", "Udon Thani", "Uthai Thani", "Uttaradit", "Yala", "Yasothon"]
      },
      {
        "country": "Togo",
        "states": ["Kara", "Plateaux", "Savanes", "Centrale", "Maritime"]
      },
      {
        "country": "Tonga",
        "states": []
      },
      {
        "country": "Trinidad and Tobago",
        "states": ["Couva", "Diego Martin", "Mayaro", "Penal", "Princes Town", "Sangre Grande", "San Juan", "Siparia", "Tunapuna", "Port-of-Spain", "San Fernando", "Arima", "Point Fortin", "Chaguanas", "Tobago"]
      },
      {
        "country": "Tunisia",
        "states": ["Ariana (Aryanah)", "Beja (Bajah)", "Ben Arous (Bin 'Arus)", "Bizerte (Banzart)", "Gabes (Qabis)", "Gafsa (Qafsah)", "Jendouba (Jundubah)", "Kairouan (Al Qayrawan)", "Kasserine (Al Qasrayn)", "Kebili (Qibili)", "Kef (Al Kaf)", "Mahdia (Al Mahdiyah)", "Manouba (Manubah)", "Medenine (Madanin)", "Monastir (Al Munastir)", "Nabeul (Nabul)", "Sfax (Safaqis)", "Sidi Bou Zid (Sidi Bu Zayd)", "Siliana (Silyanah)", "Sousse (Susah)", "Tataouine (Tatawin)", "Tozeur (Tawzar)", "Tunis", "Zaghouan (Zaghwan)"]
      },
      {
        "country": "Turkey",
        "states": ["Adana", "Adiyaman", "Afyonkarahisar", "Agri", "Aksaray", "Amasya", "Ankara", "Antalya", "Ardahan", "Artvin", "Aydin", "Balikesir", "Bartin", "Batman", "Bayburt", "Bilecik", "Bingol", "Bitlis", "Bolu", "Burdur", "Bursa", "Canakkale", "Cankiri", "Corum", "Denizli", "Diyarbakir", "Duzce", "Edirne", "Elazig", "Erzincan", "Erzurum", "Eskisehir", "Gaziantep", "Giresun", "Gumushane", "Hakkari", "Hatay", "Igdir", "Isparta", "Istanbul", "Izmir", "Kahramanmaras", "Karabuk", "Karaman", "Kars", "Kastamonu", "Kayseri", "Kilis", "Kirikkale", "Kirklareli", "Kirsehir", "Kocaeli", "Konya", "Kutahya", "Malatya", "Manisa", "Mardin", "Mersin", "Mugla", "Mus", "Nevsehir", "Nigde", "Ordu", "Osmaniye", "Rize", "Sakarya", "Samsun", "Sanliurfa", "Siirt", "Sinop", "Sirnak", "Sivas", "Tekirdag", "Tokat", "Trabzon", "Tunceli", "Usak", "Van", "Yalova", "Yozgat", "Zonguldak"]
      },
      {
        "country": "Turkmenistan",
        "states": ["Ahal Welayaty (Ashgabat)", "Balkan Welayaty (Balkanabat)", "Dashoguz Welayaty", "Lebap Welayaty (Turkmenabat)", "Mary Welayaty"]
      },
      {
        "country": "Uganda",
        "states": ["Adjumani", "Apac", "Arua", "Bugiri", "Bundibugyo", "Bushenyi", "Busia", "Gulu", "Hoima", "Iganga", "Jinja", "Kabale", "Kabarole", "Kaberamaido", "Kalangala", "Kampala", "Kamuli", "Kamwenge", "Kanungu", "Kapchorwa", "Kasese", "Katakwi", "Kayunga", "Kibale", "Kiboga", "Kisoro", "Kitgum", "Kotido", "Kumi", "Kyenjojo", "Lira", "Luwero", "Masaka", "Masindi", "Mayuge", "Mbale", "Mbarara", "Moroto", "Moyo", "Mpigi", "Mubende", "Mukono", "Nakapiripirit", "Nakasongola", "Nebbi", "Ntungamo", "Pader", "Pallisa", "Rakai", "Rukungiri", "Sembabule", "Sironko", "Soroti", "Tororo", "Wakiso", "Yumbe"]
      },
      {
        "country": "Ukraine",
        "states": ["Cherkasy", "Chernihiv", "Chernivtsi", "Crimea", "Dnipropetrovs'k", "Donets'k", "Ivano-Frankivs'k", "Kharkiv", "Kherson", "Khmel'nyts'kyy", "Kirovohrad", "Kiev", "Kyyiv", "Luhans'k", "L'viv", "Mykolayiv", "Odesa", "Poltava", "Rivne", "Sevastopol'", "Sumy", "Ternopil'", "Vinnytsya", "Volyn'", "Zakarpattya", "Zaporizhzhya", "Zhytomyr"]
      },
      {
        "country": "United Arab Emirates",
        "states": ["Abu Dhabi", "'Ajman", "Al Fujayrah", "Sharjah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"]
      },
      {
        "country": "United Kingdom",
        "states": []
      },
      {
        "country": "United States",
        "states": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      },
      {
        "country": "Uruguay",
        "states": ["Artigas", "Canelones", "Cerro Largo", "Colonia", "Durazno", "Flores", "Florida", "Lavalleja", "Maldonado", "Montevideo", "Paysandu", "Rio Negro", "Rivera", "Rocha", "Salto", "San Jose", "Soriano", "Tacuarembo", "Treinta y Tres"]
      },
      {
        "country": "Uzbekistan",
        "states": ["Andijon Viloyati", "Buxoro Viloyati", "Farg'ona Viloyati", "Jizzax Viloyati", "Namangan Viloyati", "Navoiy Viloyati", "Qashqadaryo Viloyati", "Qaraqalpog'iston Respublikasi", "Samarqand Viloyati", "Sirdaryo Viloyati", "Surxondaryo Viloyati", "Toshkent Shahri", "Toshkent Viloyati", "Xorazm Viloyati"]
      },
      {
        "country": "Vanuatu",
        "states": ["Malampa", "Penama", "Sanma", "Shefa", "Tafea", "Torba"]
      },
      {
        "country": "Venezuela",
        "states": ["Amazonas", "Anzoategui", "Apure", "Aragua", "Barinas", "Bolivar", "Carabobo", "Cojedes", "Delta Amacuro", "Dependencias Federales", "Distrito Federal", "Falcon", "Guarico", "Lara", "Merida", "Miranda", "Monagas", "Nueva Esparta", "Portuguesa", "Sucre", "Tachira", "Trujillo", "Vargas", "Yaracuy", "Zulia"]
      },
      {
        "country": "Vietnam",
        "states": ["An Giang", "Bac Giang", "Bac Kan", "Bac Lieu", "Bac Ninh", "Ba Ria-Vung Tau", "Ben Tre", "Binh Dinh", "Binh Duong", "Binh Phuoc", "Binh Thuan", "Ca Mau", "Cao Bang", "Dac Lak", "Dac Nong", "Dien Bien", "Dong Nai", "Dong Thap", "Gia Lai", "Ha Giang", "Hai Duong", "Ha Nam", "Ha Tay", "Ha Tinh", "Hau Giang", "Hoa Binh", "Hung Yen", "Khanh Hoa", "Kien Giang", "Kon Tum", "Lai Chau", "Lam Dong", "Lang Son", "Lao Cai", "Long An", "Nam Dinh", "Nghe An", "Ninh Binh", "Ninh Thuan", "Phu Tho", "Phu Yen", "Quang Binh", "Quang Nam", "Quang Ngai", "Quang Ninh", "Quang Tri", "Soc Trang", "Son La", "Tay Ninh", "Thai Binh", "Thai Nguyen", "Thanh Hoa", "Thua Thien-Hue", "Tien Giang", "Tra Vinh", "Tuyen Quang", "Vinh Long", "Vinh Phuc", "Yen Bai", "Can Tho", "Da Nang", "Hai Phong", "Hanoi", "Ho Chi Minh"]
      },
      {
        "country": "Yemen",
        "states": ["Abyan", "'Adan", "Ad Dali'", "Al Bayda'", "Al Hudaydah", "Al Jawf", "Al Mahrah", "Al Mahwit", "'Amran", "Dhamar", "Hadramawt", "Hajjah", "Ibb", "Lahij", "Ma'rib", "Sa'dah", "San'a'", "Shabwah", "Ta'izz"]
      },
      {
        "country": "Zambia",
        "states": ["Central", "Copperbelt", "Eastern", "Luapula", "Lusaka", "Northern", "North-Western", "Southern", "Western"]
      },
      {
        "country": "Zimbabwe",
        "states": ["Bulawayo", "Harare", "Manicaland", "Mashonaland Central", "Mashonaland East", "Mashonaland West", "Masvingo", "Matabeleland North", "Matabeleland South", "Midlands"]
      }
]


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
        var model_wrapper = this.create_div({'class': 'modal-dialog modal-dialog-centered azyo-modal-dialog', 'role': 'document'})
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
    // url = '/azyo_api/'
    url = 'https://platform.azyo.io:8333/azyo_api/'

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

        body.innerHTML = `
        <div id = "azyo_init_cont">
        <br>
        <h7>
            Before you start, please:
        </h7>
        <br>
        <ul>
            <li>Prepare a valid government-issued identity document</li>
            <li>Check if your device’s camera is uncovered and working</li>
            <li>Be prepared to take a selfie and photos of your ID</li>
        </ul>
        
        </div>`


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
      var dis_nb = this.next_btn
      dis_nb.disabled = true
      setTimeout(function () {
        dis_nb.disabled = false
      }, 1000);

      this.next_btn.addEventListener('click', ev => {
          this.next_btn.disabled = true
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
        var dis_nb = this.next_btn
        dis_nb.disabled = true
        setTimeout(function () {
          dis_nb.disabled = false
        }, 1000);

        this.args['VideoUtils'].init_video(this.video)

        this.next_btn.addEventListener('click', ev => {

            var photo = this.args['VideoUtils'].takepicture(this.video)

            var req_body = this.args['creds']
            req_body['required'] = {"image": photo, "step": "SELFIE"}

            // this.send_data("/azyo_api/", req_body, res => {
            this.send_data(this.url, req_body, res => {
    
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
                    Please select the Country, State and Document
                </h6>
                <div id = "azyo_selector_holder">
                    <div id = "azyo_selector_holder_inst">
                        <ul>
                            <li>Prepare a valid government-issued identity document</li>
                            <li>Check if your device’s camera is uncovered and working</li>
                            <li>Be prepared to take photos of your ID</li>
                        </ul>
                    </div>
                    <div id = "azyo_selection">
                        <div class = "azyo_sel_holder">
                            <h7>
                                Country:     
                            </h7>
                            <br>
                            <select name="azyo_country" id="azyo_country" style="width:140px">
                            </select>

                        </div>
                        <div class = "azyo_sel_holder">
                            <h7>
                                State:
                            </h7>
                            <br>
                            <select name="azyo_state" id="azyo_state" style="width:140px">
                            </select>

                        </div>
                        <div class = "azyo_sel_holder">
                            <h7>
                                Document:    
                            </h7>
                            <br>
                            <select name="azyo_doc" id="azyo_doc" style="width:140px">
                              <option class= "tp" value="Driving License">Driving License</option>
                              <option class= "tp" value="Passport">Passport</option>
                              <option class= "tp" value="Adhar Card">Adhar Card</option>
                            </select>
                        </div>
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
        var dis_nb = this.next_btn
        dis_nb.disabled = true
        setTimeout(function () {
          dis_nb.disabled = false
        }, 1000);

        let countries = locs.map(item => item["country"])

        let aggappend = ""
        for (let i = 0; i < countries.length; i++){
            let tcou = countries[i]
            let oneline = `<option class= "cou" value="${tcou}">${tcou}</option>`
            aggappend = aggappend+oneline
        }
        let cou_cont = document.getElementById("azyo_country")
        cou_cont.innerHTML = aggappend
        
        let states = locs[countries.indexOf(this.args['meta']['country'])]["states"]
        let sta_aggappend = ""
        for (let i = 0; i < states.length; i++){
            let sta_tcou = states[i]
            let sta_oneline = `<option class= "sta" value="${sta_tcou}">${sta_tcou}</option>`
            sta_aggappend = sta_aggappend+sta_oneline
        }
        var sta_cont = document.getElementById("azyo_state")
        sta_cont.innerHTML = sta_aggappend

        let sel_state = this.args['meta']['state']
        $('#azyo_state option[value='+sel_state+']').prop('selected', true)
        let cc = document.getElementById("azyo_state")
        if (cc.value == ""){
          cc.disabled = true
        }

        let sel_country = this.args['meta']['country']
        $('#azyo_country option[value='+sel_country+']').prop('selected', true)
        let country_cont = document.getElementById("azyo_country")
        country_cont.addEventListener("change", function () {
            document.getElementById("azyo_state").disabled = false
            let states = locs[countries.indexOf(country_cont.value)]["states"]
            let sta_aggappend = ""
            for (let i = 0; i < states.length; i++){
                let sta_tcou = states[i]
                let sta_oneline = `<option class= "sta" value="${sta_tcou}">${sta_tcou}</option>`
                sta_aggappend = sta_aggappend+sta_oneline
            }
            let coua_cont = document.getElementById("azyo_state")
            coua_cont.innerHTML = sta_aggappend
            if (coua_cont.value == ""){
              coua_cont.disabled = true
            }
        })


        this.next_btn.addEventListener('click', ev => {
            var c = document.getElementById('azyo_country').value
            var s = document.getElementById('azyo_state').value
            var d = document.getElementById('azyo_doc').value
            var req_body = this.args['creds']
            req_body['required'] = {'document_type': 'LICENCE', 'country': 'IND', 'state': 'MH', "step": "DOCTYPE", "meta": {'state': s, 'country': c,'document_type': d}}

            // this.send_data("/azyo_api/", req_body, res => {
            this.send_data(this.url, req_body, res => {
    
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
                <img id = "frontpiccard" src="https://raw.githubusercontent.com/cskaa/azyo_2step_public/main/cardfront.png" alt="Avatar" style="width: 100%">
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
        var dis_nb = this.next_btn
        dis_nb.disabled = true
        setTimeout(function () {
          dis_nb.disabled = false
        }, 1000);

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
            // this.send_data("/azyo_api/", req_body, res => {
            this.send_data(this.url, req_body, res => {
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
                <img id = "frontpiccard" src="https://raw.githubusercontent.com/cskaa/azyo_2step_public/main/cardfront.png" alt="Avatar" style="width: 100%">
            </div>
            <div class="flip-card-back">
                <img id = "backpiccard" src="https://raw.githubusercontent.com/cskaa/azyo_2step_public/main/cardback.png" alt="Avatar" style="width: 100%">
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
        var dis_nb = this.next_btn
        dis_nb.disabled = true
        setTimeout(function () {
          dis_nb.disabled = false
        }, 1000);

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

            this.send_data(this.url, req_body, res => {
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
                <div id="azyo_result_disp_wrapper" style = "display: flex;
                justify-content: space-between;
                flex-direction: row;
                flex-wrap: nowrap;
                align-items: center;">
                    <div style="min-width: 50%;">
                        <div>
                            <div class = "azyo-instr">
                                <i id = "ab" class="fa fa-circle-o-notch fa-spin"></i>
                                Processing Your Selfie
                            </div>
                        </div>
        
                        <div>
                            <div class = "azyo-instr">
                                <i id = "bb" class="fa fa-circle-o-notch fa-spin"></i>
                                Extracting Details
                            </div>
                        </div>

                        <div>
                            <div class = "azyo-instr">
                                <i id = "cb" class="fa fa-circle-o-notch fa-spin"></i>
                                Validating Results
                            </div>
                        </div>
                    </div>
                    <div class = "res_img_holder">
                        <img id = "img1" class = "azyo_res_img" src="" alt="" />
                        <img id = "img2" class = "azyo_res_img" src="" alt="" />
                    </div>
                </div>
                <div style = "display: flex;
                flex-direction: row;
                justify-content: center;
                align-content: center;
                margin-top: 20px">
                    <div class= "res_holder" >
                        <div id = "azyo_res"></div>
                        <br>
                        <div id = "kyc_no" style= "display: flex;flex-direction: column;justify-content: center;align-content: center;align-items: center;"></div>
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

        var dis_nb = this.next_btn
        dis_nb.disabled = true
        setTimeout(function () {
          dis_nb.disabled = false
        }, 1000);

        var a = document.getElementById("ab")
        var b = document.getElementById("bb")
        var c = document.getElementById("cb")
        
        var req_body = this.args['creds']
        req_body['required'] = {"step": "RESULTGEN"}
        this.send_data(this.url, req_body, res => {
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
                // console.log('going back')

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
                    document.getElementById('kyc_no').innerHTML = `<div>Your KYC number is: </div><div style= "font-weight: bold;">` + result['kyc'] +"</div>"
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

                    // console.log('going back')
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
        }, 200);
        setTimeout(function() {
            b.setAttribute("class", "fa fa-check")
        }, 600);


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
        // console.log('rb', req_body)
        this.send_data(this.url, req_body, res => {
            
            // console.log('rb', res)
            this.response = res['step_response']
            
        })
        
        // console.log('rb', this.response)
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
        // console.log('initialized', this.client_code, this.user_name, this.meta)
        
        this.on_finish(on_finish)
        // console.log('on finished set', this.finish_on)

        this.#init_root(root_div)
        // console.log('root div initialized', root_div)

        var view_args = {'creds': {'client_code': this.client_code, 'user_name': this.user_name}}
        this.finished = new FineshedView(view_args)
        // console.log('Finished view initialized', this.finished)
        this.index = {
            'INITIALIZED': 0,
            'SELFIE': 0,
            'DOCTYPE': 2,
            'FRONTSIDE': 3,
            'BACKSIDE': 4,
            'RESULTGEN': 5,
        }

        var response = this.finished.check_results()
        // console.log('check results:', response)
        if ('ERROR' in response) {
            throw('Client Invalid')
        }

        if (response['status'] === 'complete') {
            this.kyc_number = response['kyc_number']
            this.finished.render_view(this.root, {'kyc_number': this.kyc_number})
            this.finished.init_view()
            this.after_finish()
        }
        else {
            // console.log('Initializing the process Incomplete', response['step'])
            var current_step = response['step']
            var current_index = this.index[current_step]
            // console.log('Incomplete index', current_index)
            
            var views = [
                [GreetingsView, {}],
                [SelfieView, {'VideoUtils': VideoUtils}],
                [DocTypeView, {}],
                [FrontsideView, {'VideoUtils': VideoUtils}],
                [BacksideView, {'VideoUtils': VideoUtils}],
                [ResultGenView, {}],
            ]
            // console.log('Incomplete views', views)
            
            this.register_views(views, (current_index===0)? true: false)
            
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
                // console.log('Failed', ev.detail)
                ev.detail['view'].error_occured(ev.detail['name'], ev.detail['message'])
            }
        })
        
        this.root.addEventListener('backto', ev => {
            // console.log('back', ev.detail)
            if (ev.detail['success']) {
                this.root.innerHTML = ""
                
                var view = ev.detail["view"]
                var payload = {
                    "step": "BACK",
                    "backto": "INITIALIZED"
                }

                var req_body = view.args['creds']
                req_body['required'] = payload

                // console.log('-------', req_body)
                view.send_data(view.url, req_body, res => {})

                this.init_view(ev.detail['to'])
            }
            else {
                // console.log('Failed', ev.detail)
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
        if (result) this.finish_on(result)
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
