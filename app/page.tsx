// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
"use client";

import { useMemo, useState } from "react";

type Profile = {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  website: string;
};

type Work = {
  name: string;
  role: string;
  tech: string;
  link: string;
  description: string;
};

export default function Home() {
  const [profile, setProfile] = useState<Profile>({
    name: "Kei Tanaka",
    title: "Student Developer (Unity / Web / p5.js)",
    bio: "I build interactive experiences and web apps. I like making prototypes fast and polishing UX.",
    location: "Tokyo, Japan",
    email: "kei@example.com",
    github: "https://github.com/",
    website: "https://example.com",
  });

  const [works, setWorks] = useState<Work[]>([
    {
      name: "p5.js 2D Platformer",
      role: "Solo Dev",
      tech: "p5.js / JavaScript",
      link: "https://example.com",
      description:
        "A scrolling platformer prototype with block patterns, pitfalls, and stage composition logic.",
    },
    {
      name: "Unity Prototype",
      role: "Game Client",
      tech: "Unity / C#",
      link: "https://example.com",
      description:
        "A mid-scale Unity game prototype focusing on feel and novelty with iterative playtesting.",
    },
  ]);

  const [newWork, setNewWork] = useState<Work>({
    name: "",
    role: "",
    tech: "",
    link: "",
    description: "",
  });

  const [query, setQuery] = useState("");

  const filteredWorks = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return works;
    return works.filter((w) => {
      const blob = `${w.name} ${w.role} ${w.tech} ${w.description}`.toLowerCase();
      return blob.includes(q);
    });
  }, [query, works]);

  const profileComplete = useMemo(() => {
    const fields = [
      profile.name,
      profile.title,
      profile.bio,
      profile.location,
      profile.email,
      profile.github,
    ];
    const filled = fields.filter((v) => v.trim().length > 0).length;
    return Math.round((filled / fields.length) * 100);
  }, [profile]);

  function addWork() {
    const nameOk = newWork.name.trim().length > 0;
    const descOk = newWork.description.trim().length > 0;
    if (!nameOk || !descOk) return;

    setWorks((prev) => [{ ...newWork, link: newWork.link.trim() || "#" }, ...prev]);
    setNewWork({ name: "", role: "", tech: "", link: "", description: "" });
  }

  function removeWork(index: number) {
    setWorks((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top */}
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Live preview / editable
            </div>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>

            <p className="text-base text-zinc-300 sm:text-lg">{profile.title}</p>

            <p className="max-w-2xl leading-7 text-zinc-300/90">{profile.bio}</p>

            <div className="flex flex-wrap gap-2 pt-1 text-sm text-zinc-300/90">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">
                {profile.location}
              </span>
              <a
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
              <a
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 hover:bg-white/10"
                href={profile.website}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-zinc-300">Portfolio completeness</p>
                <p className="mt-1 text-lg font-medium">{profileComplete}%</p>
              </div>
              <div className="h-2 w-48 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-emerald-400/90"
                  style={{ width: `${profileComplete}%` }}
                />
              </div>
            </div>
            <p className="mt-3 text-xs text-zinc-400">
              Tip: Fill profile fields and add 2–3 works with links + tech stack.
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* Editor */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Edit your profile</h2>
            <p className="mt-1 text-sm text-zinc-400">
              入力すると左（上）の表示がリアルタイムで変わります。
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label="Name"
                value={profile.name}
                onChange={(v) => setProfile((p) => ({ ...p, name: v }))}
                placeholder="Kei Tanaka"
              />
              <Field
                label="Title"
                value={profile.title}
                onChange={(v) => setProfile((p) => ({ ...p, title: v }))}
                placeholder="Student Developer (Unity / Web / p5.js)"
              />
              <Field
                label="Location"
                value={profile.location}
                onChange={(v) => setProfile((p) => ({ ...p, location: v }))}
                placeholder="Tokyo, Japan"
              />
              <Field
                label="Email"
                value={profile.email}
                onChange={(v) => setProfile((p) => ({ ...p, email: v }))}
                placeholder="kei@example.com"
              />
              <Field
                label="GitHub URL"
                value={profile.github}
                onChange={(v) => setProfile((p) => ({ ...p, github: v }))}
                placeholder="https://github.com/yourname"
              />
              <Field
                label="Website URL"
                value={profile.website}
                onChange={(v) => setProfile((p) => ({ ...p, website: v }))}
                placeholder="https://your-site.com"
              />
              <div className="sm:col-span-2">
                <TextArea
                  label="Bio"
                  value={profile.bio}
                  onChange={(v) => setProfile((p) => ({ ...p, bio: v }))}
                  placeholder="What do you build? What do you care about?"
                />
              </div>
            </div>

            <hr className="my-8 border-white/10" />

            <h3 className="text-lg font-semibold">Add a work</h3>
            <p className="mt-1 text-sm text-zinc-400">
              作品を追加すると Works にカードが増えます。
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Field
                label="Work name*"
                value={newWork.name}
                onChange={(v) => setNewWork((w) => ({ ...w, name: v }))}
                placeholder="My Awesome Project"
              />
              <Field
                label="Role"
                value={newWork.role}
                onChange={(v) => setNewWork((w) => ({ ...w, role: v }))}
                placeholder="Solo Dev / Team Dev"
              />
              <Field
                label="Tech"
                value={newWork.tech}
                onChange={(v) => setNewWork((w) => ({ ...w, tech: v }))}
                placeholder="Next.js / Unity / p5.js"
              />
              <Field
                label="Link"
                value={newWork.link}
                onChange={(v) => setNewWork((w) => ({ ...w, link: v }))}
                placeholder="https://github.com/... or https://demo..."
              />
              <div className="sm:col-span-2">
                <TextArea
                  label="Description*"
                  value={newWork.description}
                  onChange={(v) => setNewWork((w) => ({ ...w, description: v }))}
                  placeholder="What does it do? What was challenging? What did you learn?"
                />
              </div>

              <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={addWork}
                  className="rounded-2xl bg-emerald-400 px-4 py-2 text-sm font-medium text-zinc-950 hover:opacity-90"
                >
                  Add work
                </button>
                <p className="text-xs text-zinc-400">
                  * required（空だと追加されません）
                </p>
              </div>
            </div>
          </section>

          {/* Works Preview */}
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">Works</h2>
                <p className="mt-1 text-sm text-zinc-400">
                  Search & manage your project cards.
                </p>
              </div>

              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40 sm:w-64"
                placeholder="Search works..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="mt-6 grid gap-4">
              {filteredWorks.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-400">
                  No works found.
                </div>
              ) : (
                filteredWorks.map((w, i) => (
                  <article
                    key={`${w.name}-${i}`}
                    className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="truncate text-base font-semibold">
                          {w.link && w.link !== "#" ? (
                            <a
                              className="hover:underline"
                              href={w.link}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {w.name}
                            </a>
                          ) : (
                            w.name
                          )}
                        </h3>

                        <p className="mt-1 text-sm text-zinc-400">
                          {w.role ? w.role : "—"} ·{" "}
                          <span className="text-zinc-300/90">{w.tech || "—"}</span>
                        </p>
                      </div>

                      <button
                        onClick={() => removeWork(works.indexOf(w))}
                        className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 hover:bg-white/10"
                        title="Remove"
                      >
                        Remove
                      </button>
                    </div>

                    <p className="mt-3 leading-7 text-zinc-300/90">
                      {w.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                      {w.tech
                        .split("/")
                        .map((t) => t.trim())
                        .filter(Boolean)
                        .slice(0, 6)
                        .map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                          >
                            {t}
                          </span>
                        ))}
                    </div>
                  </article>
                ))
              )}
            </div>

            <footer className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-zinc-400">
              Next step: Add “About / Skills / Contact” pages later using{" "}
              <span className="text-zinc-200">/app/xxx/page.tsx</span>.
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-zinc-300">{props.label}</span>
      <input
        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
      />
    </label>
  );
}

function TextArea(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm text-zinc-300">{props.label}</span>
      <textarea
        className="min-h-28 resize-y rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
      />
    </label>
  );
}
