"use client";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold">Redefining Learning</a>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#services" className="hover:underline">Services</a>
            <a href="#testimonials" className="hover:underline">Testimonials</a>
            <a href="#blog" className="hover:underline">Blog</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <Button href="mailto:cmeiers.cornerstone@gmail.com?subject=Booking%20request">Book</Button>
          </nav>
        </div>
      </header>

      {/* HERO / INTRO */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            ReDefining Learning — child-led, relationship-centered.
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            I’m Courtney (Ed.S., M.S. Counseling). I help families create liberating
            learning environments for neurodivergent kids—rooted in love, trust,
            curiosity, and community.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="mailto:cmeiers.cornerstone@gmail.com?subject=Booking%20request">Book a Call</Button>
            <Button href="#contact" style={{ backgroundColor: "#4b5563" }}>Contact</Button>
            <Button href="https://substack.com/@courtneymeiers" variant="outline" target="_blank" rel="noreferrer">Read my Substack</Button>
          </div>
        </div>

        {/* hero images grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 overflow-hidden rounded-xl">
            <Image
              src="/images/IMG_3235.jpeg"
              alt="Courtney with child under rainbow"
              width={1200}
              height={800}
              className="h-56 w-full rounded-xl object-cover shadow-sm"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/IMG_2795.jpeg"
              alt="Courtney in the grass"
              width={800}
              height={800}
              className="h-48 w-full rounded-xl object-cover shadow-sm"
            />
          </div>
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/images/IMG_2823.jpeg"
              alt="Courtney with child by water"
              width={800}
              height={800}
              className="h-48 w-full rounded-xl object-cover shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ABOUT (homeschool-focused) */}
      <section id="about" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="text-lg leading-relaxed">
              🌿 Hi, I’m Courtney — Educational Specialist (Ed.S.) and Master of Science in Counseling.
              I help families who are choosing homeschooling or unschooling create supportive, thriving
              learning environments for their children.
            </p>
            <p>
              Over the past decade, I’ve worked in 10+ school districts across 3 states and 2 countries,
              supporting families navigating IEPs and learning challenges. Children flourish when they’re
              understood in the context of their whole selves—their curiosity, family rhythms, and natural
              environment.
            </p>
            <p>
              My work is grounded in ecological and holistic approaches, combining private assessments with
              practical guidance so you can understand <em>how</em> your child learns and how to nurture that
              process at home.
            </p>
            <ul className="list-disc ml-5 space-y-1">
              <li>🌱 Rooted in love and connection</li>
              <li>🪴 Led by the child’s curiosity</li>
              <li>🌾 Free from one-size-fits-all systems</li>
            </ul>
            <p>Let’s redefine learning, together. 💛</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/IMG_2824.jpeg"
                alt="Courtney portrait"
                width={800}
                height={800}
                className="h-56 w-full rounded-xl object-cover shadow-sm"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/IMG_2826.jpeg"
                alt="Courtney laughing"
                width={800}
                height={800}
                className="h-56 w-full rounded-xl object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES (overview + packages kept as-is) */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-3xl font-semibold">Services</h2>
        <p className="text-gray-600 mt-2">Everything is tailored to your family.</p>

        {/* Overview aligned to homeschool/holistic focus */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h3 className="font-semibold text-lg">How I Support Families</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-800 mt-3">
              <li><strong>Holistic assessments</strong> to understand how your child learns best</li>
              <li><strong>Ecological learning approaches</strong> rooted in nature, curiosity, and connection</li>
              <li><strong>Parent guidance & support</strong> to build confidence in homeschooling</li>
              <li><strong>Alternative education pathways</strong> beyond one-size-fits-all systems</li>
              <li><strong>Emotional growth & resilience tools</strong> woven into daily learning</li>
            </ul>
          </div>
          <div className="rounded-xl border p-4 bg-white">
            <p className="text-sm text-gray-700">
              New to homeschooling or navigating IEP overwhelm? We’ll start with what’s most pressing,
              then build a clear, sustainable rhythm for your family.
            </p>
            <div className="mt-3">
              <Button href="mailto:cmeiers.cornerstone@gmail.com?subject=Services%20Question">Ask a question</Button>
            </div>
          </div>
        </div>

        {/* Packages (your original three offerings) */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold text-lg">The Learning Profile Snapshot</h3>
              <p className="text-sm text-gray-700">
                Quick, accessible insights into your child’s learning style and needs.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Parent intake questionnaire</li>
                <li>Review of current learning environment</li>
                <li>Human Design overview</li>
                <li>1-page tailored profile with 3 actionable recommendations</li>
              </ul>
              <p className="text-sm text-gray-600">Investment: $175</p>
              <Button href="mailto:cmeiers.cornerstone@gmail.com?subject=Snapshot%20Inquiry">Inquire</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold text-lg">The Comprehensive Learning Blueprint</h3>
              <p className="text-sm text-gray-700">
                A deeply personalized learning plan based on multiple assessments.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Holistic ecological assessment (academic, social-emotional, processing, environment, Human Design)</li>
                <li>Detailed written report with strengths, challenges, and needs</li>
                <li>Comprehensive plan with daily/weekly recommendations</li>
                <li>4+ hours live Zoom with student & parent, plus final review meeting</li>
              </ul>
              <p className="text-sm text-gray-600">Investment: $1,200–$1,500</p>
              <Button href="mailto:cmeiers.cornerstone@gmail.com?subject=Blueprint%20Inquiry">Inquire</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-3">
              <h3 className="font-semibold text-lg">The Ongoing Consulting Partnership</h3>
              <p className="text-sm text-gray-700">
                Continued support to adapt the plan as your child grows.
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                <li>Monthly 60-min Zoom consulting</li>
                <li>Email support for curriculum adjustments</li>
                <li>Seasonal learning refresh every 3 months</li>
              </ul>
              <p className="text-sm text-gray-600">$150–$200/month (3-month minimum; after Snapshot or Blueprint)</p>
              <Button href="mailto:cmeiers.cornerstone@gmail.com?subject=Consulting%20Inquiry">Inquire</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-3xl font-semibold">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card><CardContent className="p-6 text-sm">“Courtney helped us see our child clearly for the first time. Our days are calmer and learning is joyful again.”<div className="mt-3 font-medium">— A. Ramirez</div></CardContent></Card>
          <Card><CardContent className="p-6 text-sm">“The Blueprint gave us a practical, loving plan. We finally knew what to do Monday morning.”<div className="mt-3 font-medium">— J. Lee</div></CardContent></Card>
          <Card><CardContent className="p-6 text-sm">“From IEP overwhelm to clarity. Courtney’s guidance changed our family culture.”<div className="mt-3 font-medium">— M. Santos</div></CardContent></Card>
        </div>
      </section>

      {/* BLOG / SUBSTACK */}
      <section id="blog" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <h2 className="text-3xl font-semibold">Blog</h2>
        <p className="text-gray-600 mt-2">
          I write on Substack about child-led learning, unschooling, and family culture.
        </p>
        <div className="mt-6">
          <iframe
            src="https://courtneymeiers.substack.com/embed"
            width="100%"
            height="320"
            style={{ border: "1px solid #ddd", background: "white" }}
          ></iframe>
        </div>
        <div className="mt-4">
          <Button href="https://substack.com/@courtneymeiers" target="_blank" rel="noreferrer">Read the newsletter</Button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 py-16 border-t">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-semibold">Contact</h2>
            <p className="text-gray-600 mt-2">
              Tell me about your learner and your hopes. I’ll reply personally.
            </p>
            <div className="mt-4 text-sm text-gray-700">
              ✉︎ cmeiers.cornerstone@gmail.com<br />
              📍 Big Island, Hawaiʻi • Virtual worldwide
            </div>
          </div>
          <Card>
            <CardContent className="p-6">
              <form
                action="https://formsubmit.co/cmeiers.cornerstone@gmail.com"
                method="POST"
                className="space-y-4"
              >
                <Input name="name" placeholder="Your name" required />
                <Input name="email" type="email" placeholder="you@example.com" required />
                <Textarea name="message" placeholder="Your message" rows={5} required />
                <input type="hidden" name="_subject" value="New inquiry from Redefining Learning" />
                <Button type="submit">Send</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Redefining Learning ·{" "}
        <a className="underline" href="https://substack.com/@courtneymeiers" target="_blank" rel="noreferrer">
          Substack
        </a>
      </footer>
    </main>
  );
}
