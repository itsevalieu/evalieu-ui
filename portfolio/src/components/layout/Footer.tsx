export function Footer() {
  return (
    <footer>
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          marginTop: "2rem",
          borderTop: "1px solid #eaeaea",
        }}
      >
        <p className="text-gray-600">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
