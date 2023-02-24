import React from 'react'

const RequirmentsPage = () => {
  return (
    <div class="p-6 pt-40 sm:pt-40 lg:px-60">
      <h3
        className="uppercase font-bold text-transparent lg:px-20  lg:mt-28 2xl:m-20 h-[200px]  2xl:h-[100px] bg-clip-text bg-gradient-to-r from-pink-600  to-blue-600 text-4xl sm:text-6xl  text-center mt-2 tracking-thight">
        Our<b> Requirments</b>
      </h3>
      <h1 class="text-3xl font-bold mb-6">Submission Requirements - Bricks Platform</h1>
      <h2 class="text-2xl font-bold mb-4">UI Components</h2>
      <p class="mb-4">
        To ensure the quality of the UI Components submitted to the Bricks platform, they should:
      </p>

      {/* Ui components requirments */}
      <ul class="list-disc pl-6">

        <li>
          <b>Have a clear design</b><br />
          UI components should have a visually appealing design that is easy to understand and use.
          This means the component should be well organized, have a clear hierarchy of information, and use appropriate color and typography.
        </li>

        <li>
          <b>Include aria tags for accessibility</b><br />
          ARIA (Accessible Rich Internet Applications) tags are essential for making your component accessible to people with disabilities.
          They provide extra information to assistive technologies like screen readers to help people understand the component and its purpose.
        </li>

        <li>
          <b>Use the appropriate HTML tags</b><br />
          The component should use the appropriate HTML tags for its structure and content, such as headings, paragraphs, lists, and images.
          This makes it easier for search engines and assistive technologies to understand the component's content and purpose.
        </li>

        <li>
          <b>Use the appropriate tags for images and icons</b><br />
          The component should be optimized for search engines by including relevant keywords in the component's content, meta tags, and alt tags for images.
          This helps search engines understand the component's content and makes it more likely to appear in search results.
        </li>

        <li>
          <b>Be optimized for performance</b><br />
          The component should be optimized for performance, so it loads quickly and smoothly.
          This improves the overall user experience and helps prevent users from leaving the platform.
        </li>

        <li>
          <b>Be optimized for contrast</b><br />
        </li>The component should have high contrast between text and background colors to ensure it's readable for people with color blindness and other visual impairments.

        <li>
          <b>Be responsive</b><br />
          The component should be designed to adapt to different screen sizes and devices, so it's usable on desktops, laptops, tablets, and smartphones.
        </li>

        <li>
          <b>Clear UI</b><br />
          The component should have a clear and consistent user interface, using the same design elements and patterns throughout. This makes it easier for users to understand how to use the component and improves the overall user experience.
        </li>

      </ul>
      <h2 class="text-2xl font-bold mb-4 mt-10">Blog Posts</h2>
      <p class="mb-4">
        To ensure the quality of the blog posts submitted to the Bricks platform, they should:
      </p>
      <ul class="list-disc pl-6">
        <li>
          <b>Formatting</b><br />
          Posts should be well-structured and visually appealing, using headings, bullet points, images, and other formatting elements as appropriate.
        </li>

        <li>
          <b>No AI usage</b><br />
          Posts should not be generated by AI or automated systems. Hand-written content is preferred.
        </li>

        <li>
          <b>English proficiency and Clarity</b><br />
          Posts should be written in clear, grammatically correct English.
          : The writing should be easy to understand for the target audience. Avoid using complex jargon or technical terms without proper explanation.
        </li>

        <li>
          <b>Original content</b><br />
          Posts should be original and not copied from other sources.
        </li>

        <li>
          <b>Length</b><br />
          Posts should be of sufficient length to fully cover the topic and provide depth of information.
        </li>

        <li>
          <b>Relevance</b><br />
          Posts should be relevant to the blog's topic and provide value to the reader.
        </li>

      </ul>
      <h2 class="text-2xl font-bold mb-4 mt-10">Templates</h2>
      <p class="mb-4">
        To ensure the quality of the templates submitted to the Bricks platform, they should:
      </p>
      <ul class="list-disc pl-6">

        <li>
          <b>Link to blog posts</b><br />
          Templates should be linked to blog posts, so users can easily access the corresponding content
        </li>

        <li>
          <b>GitHub availability</b><br />
          Templates should be available on GitHub for users to access and use.
        </li>
      </ul>
    </div>
  )
}

export default RequirmentsPage