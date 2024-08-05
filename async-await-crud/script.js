(() => {
  const $getBtnEl = document.querySelector(".getBtn");

  const handleGet = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data.data);
      return data.data;
    } catch (err) {
      console.log("Error fetching data:", err);
      return [];
    }
  };

  $getBtnEl.addEventListener("click", handleGet);

  const $form = document.querySelector("form");
  $form.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData($form);
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          job: formData.get("job"),
        }),
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log("Error posting new user data:", err);
    }
  });
})();
