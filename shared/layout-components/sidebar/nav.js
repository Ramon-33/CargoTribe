export const MENUITEMS = [
    {
      menutitle: "Main",
      Items: [
        {
          title: "Dashboards",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/dashboards/dashboard1`,
              type: "link",
              active:false,
              selected:false,
              title: "Dashboard-1",
            },
            {
              path: `/components/dashboards/dashboard2`,
              type: "link",
              active:false,
              selected:false,
              title: "Dashboard-2",
            },
            {
              path: `/components/dashboards/dashboard3`,
              type: "link",
              active:false,
              selected:false,
              title: "Dashboard-3",
            },
          ],
        },
      ],
    },
  
    {
      menutitle: "SALES",
      Items: [
        {
          title: "Sales",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/apps/agents`,
              type: "link",
              active:false,
              selected:false,
              title: "Agents",
            },
            {
              path: `/components/apps/contacts1`,
              type: "link",
              active:false,
              selected:false,
              title: "Contacts",
            },
            {
              path: `/components/apps/opportunities`,
              type: "link",
              active:false,
              selected:false,
              title: "Opportunities",
            },
            {
              path: `/components/apps/price-request`,
              type: "link",
              active:false,
              selected:false,
              title: "Price Request",
            },
            {
              path: `/components/apps/contacts`,
              type: "link",
              active:false,
              selected:false,
              title: "Contacts",
            },
          ],
        },
        {
          title: "Elements",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/elements/tabs`,
              title: "Tabs",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
        {
          title: "Advanced UI",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
              <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          bookmark: true,
          active:false,
          children: [
            {
              path: `/components/advancedui/accordions`,
              type: "link",
              active:false,
              selected:false,
              title: "Accordions",
            },
            {
              path: `/components/advancedui/carousel`,
              type: "link",
              active:false,
              selected:false,
              title: "Carousel",
            },
            {
              path: `/components/advancedui/collapse`,
              type: "link",
              active:false,
              selected:false,
              title: "Collapse",
            },
            {
              path: `/components/advancedui/modal`,
              type: "link",
              active:false,
              selected:false,
              title: "Modal",
            },
            {
              path: `/components/advancedui/timeline`,
              type: "link",
              active:false,
              selected:false,
              title: "Timeline",
            },
            {
              path: `/components/advancedui/sweet-alert`,
              type: "link",
              active:false,
              selected:false,
              title: "Sweet Alert",
            },
  
            {
              path: `/components/advancedui/rating`,
              type: "link",
              active:false,
              selected:false,
              title: "Rating",
            },
            {
              path: `/components/advancedui/counters`,
              type: "link",
              active:false,
              selected:false,
              title: "Counters",
            },
  
            {
              path: `/components/advancedui/search`,
              type: "link",
              active:false,
              selected:false,
              title: "Search",
            },
            {
              path: `/components/advancedui/userlist`,
              type: "link",
              active:false,
              selected:false,
              title: "Userlist",
            },
            {
              path: `/components/advancedui/blog`,
              type: "link",
              active:false,
              selected:false,
              title: "Blog",
            },
            {
              path: `/components/advancedui/blog-details`,
              type: "link",
              active:false,
              selected:false,
              title: "Blog-details",
            },
            {
              path: `/components/advancedui/edit-post`,
              type: "link",
              active:false,
              selected:false,
              title: "Edit-post",
            },
            {
              path: `/components/advancedui/file-attachments`,
              type: "link",
              active:false,
              selected:false,
              title: "File Attachments",
            },
          ],
        },
      ],
    },
  
    {
      menutitle: "OPS",
      Items: [
        {
          title: "Pages",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
              <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
              <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              title: "Authentication",
              type: "sub",
              selected:false,
              active:false,
              children: [
                {
                  path: `/components/pages/authentication/sign-in`,
                  title: "Sig In",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/sign-up`,
                  title: "Sig Up",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/forgot-password`,
                  title: "Forgot Password",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/reset-password`,
                  title: "Reset Password",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/lockscreen`,
                  title: "Lockscreen",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/underconstruction`,
                  title: "UnderConstruction",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/404`,
                  title: "404 Error",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/500`,
                  title: "500 Error",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/authentication/501`,
                  title: "501 Error",
                  type: "link",
                  active:false,
                  selected:false,
                },
              ],
            },
            {
              title: "Switcher",
              type: "sub",
              selected:false,
              active:false,
              children: [
                {
                  path: `/components/pages/switcher`,
                  title: "Switcher-1",
                  type: "link",
                  active:false,
                  selected:false,
                },
              ],
            },
            {
              title: "E-Commerce",
              type: "sub",
              selected:false,
              active:false,
              children: [
                {
                  path: `/components/pages/e-commerce/shop`,
                  title: "Shop",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/e-commerce/product-details`,
                  title: "Product Details",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/e-commerce/cart`,
                  title: "Cart",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/e-commerce/checkout`,
                  title: "Checkout",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/e-commerce/wish-list`,
                  title: "Wish-list",
                  type: "link",
                  active:false,
                  selected:false,
                },
              ],
            },
  
            {
              path: `/components/pages/profile`,
              title: "Profile",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/notification-list`,
              title: "Notification-list",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/about-us`,
              title: "About Us",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/settings`,
              title: "Settings",
              type: "link",
              active:false,
              selected:false,
            },
            {
              title: "Mail",
              type: "sub",
              selected:false,
              active:false,
              children: [
                {
                  path: `/components/pages/mail/mail`,
                  title: "Mail",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/mail/mail-compose`,
                  title: "Mail Compose",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/mail/read-mail`,
                  title: "Read-Mail",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/mail/mail-settings`,
                  title: "Mail-Settings",
                  type: "link",
                  active:false,
                  selected:false,
                },
                {
                  path: `/components/pages/mail/chat`,
                  title: "Chat",
                  type: "link",
                  active:false,
                  selected:false,
                },
              ],
            },
            {
              path: `/components/pages/invoice`,
              title: "Invoice",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/pricing`,
              title: "Pricing",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/gallery`,
              title: "Gallery",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/todotask`,
              title: "Todotask",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/faqs`,
              title: "FAQS",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/empty-page`,
              title: "Empty Page",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/empty-page1`,
              title: "Empty Page1",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/pages/contacts`,
              title: "Contacts",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
        {
          title: "Utilities",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" />
              <path d="M11 9h2v5h-2zm0 6h2v2h-2z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/utilities/background`,
              title: "Background",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
      ],
    },
    {
      menutitle: "ACCOUNTING",
      Items: [
        {
          title: "Icons",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          children: [
            {
              path: `/components/icons/bootstrap-icons`,
              title: "Bootstrap Icons",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
        {
          title: "Charts",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          children: [
            {
              path: `/components/charts/chartjs`,
              title: " ChartJs",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/charts/echart`,
              title: "Echart",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/charts/apexcharts`,
              title: "ApexCharts",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
      ],
    },
    {
      menutitle: "COMPONENTS",
      Items: [
        {
          title: "Forms",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/forms/form-elements`,
              title: "Form Elements",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/advanced-forms`,
              title: "Advanced Forms",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/form-layouts`,
              title: "Form Layouts",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/form-validation`,
              title: "Form Validation",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/form-wizard`,
              title: "Form Wizard",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/form-editor`,
              title: "Form Editor",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/form-element-sizes`,
              title: "Form-element-sizes",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/forms/form-input-spinners`,
              title: "Form Input Spinners",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
        {
          title: "Tables",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z" />
            </svg>
          ),
          type: "sub",
          selected:false,
          active:false,
          children: [
            {
              path: `/components/tables/default-tables`,
              title: " Default Tables",
              type: "link",
              active:false,
              selected:false,
            },
            {
              path: `/components/tables/data-tables`,
              title: "Data Tables ",
              type: "link",
              active:false,
              selected:false,
            },
          ],
        },
        {
          path: `/components/widgets`,
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="side-menu__icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
            </svg>
          ),
          type: "link",
          selected:false,
          active:false,
          title: "Widgets",
        },
      ],
    },
  ];
  