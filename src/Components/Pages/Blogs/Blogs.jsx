import React from "react";

const Blogs = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.ibb.co/231KKHB/authentication-tokens.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    what is access token and refreash token ? how do they work
                    and where should we store them on then client side?
                  </h1>
                  <p className="leading-relaxed mb-3">
                    An access token and a refresh token are used in the context
                    of authentication and authorization systems.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <label
                      htmlFor="my-modal-5"
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 "
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </label>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Put this part before </body> tag */}
            <article>
              <input type="checkbox" id="my-modal-5" className="modal-toggle" />
              <div className="modal px-6">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">
                    An access token and a refresh token are used in the context
                    of authentication and authorization systems. Here's an
                    overview of what they are and how they work:
                  </h3>
                  <p className="p-4">
                    <h2 className="text-2xl font-bold"> Access Token:</h2>
                    <p>
                      An access token is a credential that is used to access
                      protected resources or perform actions on behalf of a user
                      or application.
                      <br />
                      <br />
                      It is typically issued by an authentication server or
                      identity provider after successful authentication and
                      authorization.
                      <br />
                      <br />
                      Access tokens are time-limited and provide limited
                      permissions, ensuring security and controlled access to
                      resources.
                      <br />
                      <br />
                      They are commonly used in stateless authentication systems
                      (e.g., OAuth 2.0) where the server does not need to store
                      session information.
                      <br /> <br />
                      Access tokens are usually included in the HTTP headers or
                      as parameters in API requests to authenticate and
                      authorize the associated user or application.
                    </p>
                    <br />
                    <br />
                    <p>
                      <h2 className="text-2xl font-bold ">Refreash Token</h2>
                      <p>
                        A refresh token is a long-lived credential that is used
                        to obtain a new access token without requiring the user
                        to reauthenticate. <br /> <br />
                        It is issued alongside the access token and is typically
                        used when the access token expires or becomes invalid.
                        <br /> <br />
                        Refresh tokens are securely stored on the client side
                        and should be kept confidential to prevent unauthorized
                        access.
                        <br /> <br />
                        When the access token expires, the client can send the
                        refresh token to a token endpoint to obtain a new access
                        token.
                        <br /> <br />
                        Refresh tokens are useful for maintaining long-term
                        sessions and improving user experience by eliminating
                        the need for frequent reauthentication.
                      </p>
                    </p>
                  </p>
                  <p>
                    <p>
                      <h2 className="text-3xl font-bold">
                        {" "}
                        Regarding storage on the client side:
                      </h2>
                      Access tokens should be stored securely and protected from
                      unauthorized access. They should not be exposed or
                      accessible by malicious actors. Common storage options for
                      access tokens on the client side include memory (e.g.,
                      variables), browser cookies, or local storage. <br />
                      <br />
                      It's important to evaluate the security implications of
                      each storage option and choose the one that aligns with
                      your application's requirements. Refresh tokens, on the
                      other hand, should be stored in a more secure manner. They
                      should not be accessible from client-side JavaScript code.{" "}
                      <br />
                      <br />
                      One recommended approach is to store the refresh token in
                      an HTTP-only cookie, which is not accessible by
                      client-side JavaScript, making it more secure against
                      cross-site scripting attacks. Storing refresh tokens in
                      HTTP-only cookies helps mitigate the risk of leakage if
                      your application is vulnerable to cross-site scripting
                      attacks. <br />
                      <br />
                      It's crucial to carefully handle and store tokens on the
                      client side to ensure the security of user data and
                      prevent unauthorized access to resources.
                    </p>
                  </p>
                  <div className="modal-action">
                    <label htmlFor="my-modal-5" className="btn">
                      Done!
                    </label>
                  </div>
                </div>
              </div>
            </article>
            {/* ------- */}

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.ibb.co/VBYkqH8/screenshot-2022-02-13-at-20-38-39.webp"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Compare SQL and NoSQL Database ?
                  </h1>
                  <p className="leading-relaxed mb-3">
                    SQL (Structured Query Language) and NoSQL (Not only SQL)
                    databases are two different types of database management
                    systems that differ in their data models, query languages,
                    scalability, and use cases.
                  </p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <label htmlFor="my-modal-2">Learn More</label>
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <article>
              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-2" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <div>
                    <h2 className="font-bold text-xl my-3">Data Model:</h2>
                    <ul>
                      <li>
                        <strong>SQL:</strong> Structured data with predefined
                        schemas based on tables and relationships.
                      </li>
                      <li>
                        <strong>NoSQL:</strong> Flexible data models, including
                        key-value, document, columnar, or graph.
                      </li>
                    </ul>

                    <h2 className="font-bold text-xl my-3">Query Language:</h2>
                    <ul>
                      <li>
                        <strong>SQL:</strong> Standardized query language (SQL)
                        for structured data manipulation.
                      </li>
                      <li>
                        <strong>NoSQL:</strong> Specific query languages for
                        each database type, or some may support SQL-like
                        queries.
                      </li>
                    </ul>

                    <h2 className="font-bold text-xl my-3">Scalability:</h2>
                    <ul>
                      <li>
                        <strong>SQL:</strong> Vertical scaling (increasing
                        resources) or complex horizontal scaling (multiple
                        servers).
                      </li>
                      <li>
                        <strong>NoSQL:</strong> Designed for easy horizontal
                        scaling (adding servers) to handle large data and
                        traffic.
                      </li>
                    </ul>

                    <h2 className="font-bold text-xl my-3">
                      Schema Flexibility:
                    </h2>
                    <ul>
                      <li>
                        <strong>SQL:</strong> Rigid schemas requiring predefined
                        structure and data types.
                      </li>
                      <li>
                        <strong>NoSQL:</strong> Flexible schemas, allowing
                        dynamic changes and accommodating diverse data
                        structures.
                      </li>
                    </ul>

                    <h2 className="font-bold text-xl my-3">ACID Compliance:</h2>
                    <ul>
                      <li>
                        <strong>SQL:</strong> Strong ACID guarantees with robust
                        transaction support.
                      </li>
                      <li>
                        <strong>NoSQL:</strong> Varies in ACID compliance, with
                        some prioritizing scalability over strict consistency.
                      </li>
                    </ul>

                    <h2 className="font-bold text-xl my-3">Use Cases:</h2>
                    <ul>
                      <li>
                        <strong>SQL:</strong> Structured and relational data,
                        suitable for financial systems, e-commerce, CMS.
                      </li>
                      <li>
                        <strong>NoSQL:</strong> Unstructured, rapidly changing
                        data, ideal for real-time analytics, caching, social
                        media, IoT.
                      </li>
                    </ul>
                  </div>

                  <div className="modal-action">
                    <label htmlFor="my-modal-2" className="btn">
                      Done!
                    </label>
                  </div>
                </div>
              </div>
            </article>
            {/* blog 3 */}

            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.ibb.co/8byyLGQ/1-acfs-KMRr-ZSpog-DM-FKEAUQ.jpg"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    What is Express js ? What is Next Js ?
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Express.js and Next.js are both popular JavaScript
                    frameworks used for web development, but they serve
                    different purposes
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <label htmlFor="my-modal-3"> Learn More</label>
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h2 className="text-2xl font-bold mb-4">Express.js:</h2>
                  <p className="text-base mb-4">
                    Express.js is a minimalist web application framework for
                    Node.js. It provides a set of features and tools to build
                    web applications and APIs. It focuses on simplicity and
                    flexibility, allowing developers to create server-side
                    applications with ease. Express.js provides routing,
                    middleware support, and an ecosystem of plugins to extend
                    its functionality. It is commonly used for building RESTful
                    APIs, single-page applications (SPAs), and server-rendered
                    web applications.
                  </p>

                  <h2 className="text-2xl font-bold mb-4">Next.js:</h2>
                  <p className="text-base mb-4">
                    Next.js is a React framework for building server-rendered
                    and statically-generated web applications. It is built on
                    top of React and provides additional features for
                    server-side rendering (SSR), static site generation (SSG),
                    and client-side rendering (CSR). Next.js simplifies the
                    setup and configuration required for React-based projects,
                    providing built-in routing, code splitting, and server-side
                    rendering capabilities. It offers an opinionated file-based
                    routing system, automatic code splitting, and easy
                    deployment options. Next.js is often used for building
                    scalable and performant websites, e-commerce platforms,
                    blogs, and other content-driven applications.
                  </p>
                </div>

                <div className="modal-action">
                  <label htmlFor="my-modal-3" className="btn">
                    Yay!
                  </label>
                </div>
              </div>
            </div>

            {/* blog 4 */}
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://i.ibb.co/1QwptFN/4e5ee169492bc2620d232b33ebc000b75adbbe6d.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    CATEGORY
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    What is MongoDB aggregate and How does it works?
                  </h1>
                  <p className="leading-relaxed mb-3">
                  MongoDB, the aggregate function is a powerful feature that allows you to perform complex data processing and analysis operations on collections. It provides a way to manipulate and transform data using a pipeline of stages.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                      <label htmlFor="my-modal-4"> Learn More</label>
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">MongoDB Aggregate:</h2>
              <p className="text-base mb-4">
                In MongoDB, the <code>aggregate</code> function is a powerful
                feature that allows you to perform complex data processing and
                analysis operations on collections. It provides a way to
                manipulate and transform data using a pipeline of stages.
              </p>

              <h3 className="text-xl font-bold mb-2">How it works:</h3>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">
                  <strong>
                    Matching Stage (<code>$match</code>):
                  </strong>{" "}
                  This stage filters the documents in the collection based on
                  specified conditions.
                </li>
                <li className="mb-2">
                  <strong>
                    Projection Stage (<code>$project</code>):
                  </strong>{" "}
                  This stage reshapes the documents in the collection by
                  including or excluding specific fields.
                </li>
                <li className="mb-2">
                  <strong>
                    Grouping Stage (<code>$group</code>):
                  </strong>{" "}
                  This stage groups documents based on a specified key and
                  performs aggregate calculations on the grouped data.
                </li>
                <li className="mb-2">
                  <strong>
                    Sorting Stage (<code>$sort</code>):
                  </strong>{" "}
                  This stage sorts the documents based on specified criteria.
                </li>
                <li className="mb-2">
                  <strong>
                    Limiting Stage (<code>$limit</code>):
                  </strong>{" "}
                  This stage limits the number of documents in the output.
                </li>
                <li className="mb-2">
                  <strong>
                    Skipping Stage (<code>$skip</code>):
                  </strong>{" "}
                  This stage skips a specified number of documents in the input.
                </li>
                <li className="mb-2">
                  <strong>
                    Joining Stage (<code>$lookup</code>):
                  </strong>{" "}
                  This stage performs a left outer join with another collection.
                </li>
                <li className="mb-2">
                  <strong>Aggregation Expressions and Operators:</strong>{" "}
                  MongoDB provides a rich set of expressions and operators to
                  perform operations like arithmetic, array manipulation,
                  conditional expressions, etc.
                </li>
              </ol>

              <p className="text-base">
                By combining these stages and utilizing aggregation expressions,
                you can perform advanced data transformations, aggregations, and
                analytics operations on your MongoDB collections. The{" "}
                <code>aggregate</code> function is executed by passing an array
                of stages to it, and the stages are executed in the order they
                appear in the array.
              </p>
            </div>

            <div className="modal-action">
              <label htmlFor="my-modal-4" className="btn">
                Done!
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
