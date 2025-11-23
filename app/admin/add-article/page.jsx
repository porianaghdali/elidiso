"use client";
import { useState } from "react";

export default function AddArticlePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
console.log(image);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const formData = new FormData();
    formData.append("id", 1);
    formData.append("title", title);
    formData.append("des", content);
    formData.append("slug", slug);
    formData.append("image", image);

    try {
      const res = await fetch("http://localhost/add.php", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
if (data.status === "success") {
  setMsg("مقاله با موفقیت ذخیره شد!");
  setTitle("");
  setContent("");
  setSlug("");
  setImage(null);
} else {
  setMsg("خطا: " + JSON.stringify(data));
}

    } catch (err) {
      setMsg("خطا در ارتباط با سرور");
    }

    setLoading(false);
  };

  return (
    <div
      className="border bg-white p-4 rounded-2xl"
      style={{ maxWidth: 600, margin: "50px auto", direction: "rtl" }}
    >
      <h2>افزودن مقاله جدید</h2>

      <form onSubmit={handleSubmit}>
        <label>عنوان</label>
        <input
          type="text"
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>متن مقاله</label>
        <textarea
          className="input"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <label>اسلاگ (اختیاری)</label>
        <input
          type="text"
          className="input"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <label>تصویر</label>
        <input
          type="file"
          accept="image/*"
          className=" cursor-pointer"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            background: "#0070f3",
            color: "#fff",
            padding: "10px 15px",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          {loading ? "در حال ارسال..." : "ذخیره مقاله"}
        </button>
      </form>

      {msg && <p style={{ marginTop: 20 }}>{msg}</p>}

      <style jsx>{`
        .input {
          width: 100%;
          padding: 10px;
          border: 1px solid #dcdcdc;
          border-radius: 6px;
          margin: 8px 0 15px;
        }
      `}</style>
    </div>
  );
}
