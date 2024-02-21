function searchDisease() {
    var disease = document.getElementById("searchInput").value.toLowerCase();
    var resultDiv = document.getElementById("result");
    var pasColors = {
      "tínea": "PAS",
      "hanseníase": "Fite-faraco",
      "lupus": "PAS",
      "mh": "Fite-faraco",
      "mht": "Fite-faraco",
      "tuberculose": "Ziehl neelsen",
      "vitiligo": "Fontana masson",
      "amiloidose": "Vermelho congo",
      "fígado": "perls, massom e retículo"
    };

    if (pasColors.hasOwnProperty(disease)) {
      resultDiv.innerHTML = `<p>A coloração especial para ${disease} é ${pasColors[disease]}.</p>`;
    } else {
      resultDiv.innerHTML = "<p>Esta hipótese não requer coloração especial.</p>";
    }
  }
  document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchDisease();
    }
  });
