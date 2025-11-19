const { createApp, onMounted, ref } = Vue;

    createApp({
      setup() {
        const currentSection = ref("Home");

        const sections = ["Home", "About", "Gallery", "Projects", "Blogs", "Contact"];

        const onScroll = () => {
          const scrollPos = window.scrollY + 150;
          for (let id of sections) {
            const el = document.getElementById(id);
            if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
              currentSection.value = id;
              break;
            }
          }
        };

        onMounted(() => {
          window.addEventListener("scroll", onScroll);
        });

        return { currentSection };
      }
    }).mount("#app");