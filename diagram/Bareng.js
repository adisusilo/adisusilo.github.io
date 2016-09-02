
FusionCharts.ready(function () {
								
								var revenueChart = new FusionCharts({
										type: 'doughnut2d',
										renderAt: 'Bareng2',
										width: '400',
										height: '300',
										dataFormat: 'json',
										dataSource: {
											"chart": {
												"subCaption": "Persentase Kekumuhan",
												"numberPrefix": "$",
												"paletteColors": "#ff0000,#1aaf5d,#f2c500,#f45b00,#8e0000",
												"bgColor": "#ffffff",
												"showBorder": "0",
												"use3DLighting": "0",
												"showShadow": "0",
												"enableSmartLabels": "0",
												"startingAngle": "310",
												"showLabels": "0",
												"showPercentValues": "1",
												"showLegend": "1",
												"legendShadow": "0",
												"legendBorderAlpha": "0",                                
												"decimals": "2",
												"captionFontSize": "12",
												"subcaptionFontSize": "12",
												"subcaptionFontBold": "0",
												"toolTipColor": "#ffffff",
												"toolTipBorderThickness": "0",
												"toolTipBgColor": "#000000",
												"toolTipBgAlpha": "80",
												"toolTipBorderRadius": "2",
												"toolTipPadding": "5",
											},
											"data": [
												{
													"label": "Kumuh",
													"value": "22.3"
												}, 
																							
												{
													"label": "Tidak Kumuh",
													"value": "77.70"
												}
											]
										}
									}).render();
									
									var topStores = new FusionCharts({
									type: 'bar2d',
									renderAt: 'Bareng1',
									width: '420',
									height: '450',
									dataFormat: 'json',
									dataSource: {
										"chart": {
											"subCaption": "Persentase Parameter Kekumuhan",
											"yAxisName": "Persentase (%)",
											"paletteColors": "#0075c2",
											"bgColor": "#ffffff",
											"showBorder": "0",
											"showCanvasBorder": "0",
											"usePlotGradientColor": "0",
											"plotBorderAlpha": "20",
											"placeValuesInside": "1",
											"valueFontColor": "#ffffff",
											"showAxisLines": "1",
											"axisLineAlpha": "25",
											"divLineAlpha": "10",
											"alignCaptionWithCanvas": "0",
											"showAlternateVGridColor": "0",
											"captionFontSize": "12",
											"subcaptionFontSize": "12",
											"subcaptionFontBold": "0",
											"toolTipColor": "#ffffff",
											"toolTipBorderThickness": "0",
											"toolTipBgColor": "#000000",
											"toolTipBgAlpha": "80",
											"toolTipBorderRadius": "2",
											"toolTipPadding": "5"
										},
										
										"data": [
											{
												"label": "Keteraturan Bangunan",
												"value": "61"
											}, 
											
											{
												"label": "Luas Bangunan Sesuai Teknis",
												"value": "91"
											}, 
											{
												"label": "Bangunan Sesuai Teknis",
												"value": "97"
											}, 
											{
												"label": "Kawasan Jalan Baik",
												"value": "64"
											},
											
											{
												"label": "Kondisi Jalan Baik",
												"value": "62"
											},
											{
												"label": "Kawasan Bebas Banjir",
												"value": "94"
											},
											{
												"label": "Drainase Baik",
												"value": "96"
											},
											{
												"label": "Masyarakat Terlayani Air",
												"value": "92"
											},
											{
												"label": "Masyarakat Terpenuhi Kebutuhan Air",
												"value": "100"
											},
											{
												"label": "Masyarakat Memiliki Jamban Bersama",
												"value": "99"
											},
											{
												"label": "Jumlah Jamban sesuai Syarat",
												"value": "73"
											},
											{
												"label": "Saluran Limbah Terpisah drainase",
												"value": "50"
											},
											{
												"label": "Sampah diangkut ke TPS",
												"value": "100"
											},
											{
												"label": "Sarana Pencegah Kebakaran",
												"value": "1"
											},
											{
												"label": "Bangunan Ber-IMB",
												"value": "50"
											},
											{
												"label": "Lahan Bangunan Memiliki Surat",
												"value": "88"
											},
											
											{
												"label": "Masyarakat Pedagang/Jasa",
												"value": "81"
											},
											{
												"label": "Rumah Listrik 900 Watt",
												"value": "54"
											},
											{
												"label": "Pengguna Fasilitas Puskesmas/Pustu",
												"value": "53"
											},
											{
												"label": "Pengguna Fasilitas Pendidikan damlam Kelurahan/Kecamatan",
												"value": "51"
											},
										]
									}
								})
								.render();
								
									
									
									
							});
							