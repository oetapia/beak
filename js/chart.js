const ctx = document.getElementById('myChart').getContext('2d');
				const myChart = new Chart(ctx, {
					type: 'pie',
					data: {
						labels: ['Teo', 'Damien', 'Esteban'],
						datasets: [{
							label: 'time',
							data: [16, 43, 41],
							backgroundColor: [
								'rgba(195, 255, 241, 0.2)',
								'rgba(192, 229, 255, 0.2)',
								'rgba(254, 211, 255, 0.2)',
							],
							borderColor: [
							'rgba(195, 255, 241, 0.9)',
								'rgba(192, 229, 255, 0.9)',
								'rgba(254, 211, 255, 0.9)',
							],
							borderWidth: 1
						}]
					},
					options: {
						scales: {
							
						}
					}
				});