<script lang="ts">
  let modalElement: HTMLDialogElement;
  $effect(() => {
    const tosAccepted = localStorage.getItem('tos_accepted');
    if (tosAccepted !== 'yes') modalElement.showModal();
    else modalElement.classList.add('hidden');
  });

  function closeModal() {
    localStorage.setItem('tos_accepted', 'yes');
    modalElement.classList.add('hidden');
    modalElement.close();
  }
</script>

<svelte:head>
  <title>akza07 | Portfolio</title>
  <meta
    name="description"
    content="Backend Engineer building robust, reliable, performant and scalable web applications with Python, JavaScript, TypeScript and PostgreSQL experience. Checkout the project sections to explore my hobby projects. Checkout notes sections to read my notes on backend things or in general."
  />
</svelte:head>

<dialog
  class="m-auto! flex items-center justify-center rounded outline-none dark:bg-gray-700 dark:text-white"
  bind:this={modalElement}
>
  <div class="prose p-5 dark:prose-invert">
    <div class="text-center text-2xl font-bold">Note</div>
    <ol>
      <li>It's not your network or browser. This page is intentionally monospace.</li>
      <li>This site has no tracking, at least from my end.</li>
    </ol>
    <button
      class="border-white-1 mx-auto mt-3 block rounded border px-3 dark:bg-gray-800 dark:outline-white"
      onclick={closeModal}>Close</button
    >
  </div>
</dialog>
<div class="relative min-h-screen w-auto">
  <div
    class="flex items-center justify-center p-10 font-mono text-2xl tracking-wide dark:bg-slate-800"
  >
    <div class="prose min-w-3/5 dark:prose-invert">
      <header>
        <div class="space-y-4 text-center">
          <h1 class="font-mono text-6xl font-bold tracking-widest dark:text-slate-100">
            akza07
          </h1>
          <p class="mx-auto max-w-xl text-xl dark:text-slate-300">
            Backend-focused engineer who builds fast APIs, distributed workers, and queue-driven
            systems.
          </p>
        </div>
      </header>
      <hr />
      <main>
        <h2 class="underline underline-offset-8 dark:text-slate-300">Background</h2>
        <ul>
          <li><strong>Education: </strong> B-Tech Computer Science.</li>
          <li><strong>Work Experience: </strong> 4+ years as Software Engineer.</li>
          <li><strong>Specialization: </strong> Backend Engineering & Development</li>
          <li><a href="https://www.linkedin.com/in/akza07" target="_blank">More...</a></li>
        </ul>
        <hr />

        <h2 class="underline underline-offset-8 dark:text-slate-300">Languages & Stacks</h2>
        <ul class="dark:text-slate-400">
          <li><strong>Languages:</strong> TypeScript,JavaScript, Python, Go</li>
          <li><strong>Backend Frameworks:</strong> NestJS, Django REST Framework</li>
          <li><strong>Frontend Bits:</strong> Svelte, React, HTML, CSS</li>
          <li><strong>Databases:</strong> PostgreSQL, SQL in general, MongoDB</li>
          <li><strong>Queues / Workers:</strong> Redis, RabbitMQ, SQS, BullMQ, Huey</li>
          <li><strong>Infra Bits:</strong> Linux, Docker, Podman</li>
          <li><strong>Version Management:</strong> Git, GitLab, GitHub</li>
        </ul>
        <hr />

        <h2 class="underline underline-offset-8 dark:text-slate-300">
          3rd Party Integrations & Services
        </h2>
        <ul class="dark:text-slate-400">
          <li>
            <strong>iOS Subscriptions</strong> — App Store Server Notifications (V2), receipt validation.
          </li>
          <li>
            <strong>Stripe</strong> — subscription flows, billing automation, webhook handling, Stripe
            connect payouts.
          </li>
          <li>
            <strong>PayPal & Venmo</strong> — automated <strong>payouts</strong>, ledgers,
            webhook/status sync.
          </li>
          <li><strong>Tango Card</strong> — digital reward fulfillment automation.</li>
          <li><strong>Firebase</strong> — Cloud Messaging, Realtime Database, Firestore</li>
          <li>
            <strong>Twilio & Sendgrid</strong> — Sending SMS & E-mails and tracking them using webhooks
          </li>
          <li>
            <strong>AWS</strong> — S3, SQS, Lambda, Event Bridges, SES and more. Infrastructure deployments
            with AWS CDK ( not fun )
          </li>
        </ul>

        <p class="dark:text-slate-400">
          If it involves webhooks, signatures, async events, or weird third-party quirks, I’ve
          probably debugged it.
        </p>
        <hr />

        <h2 class="underline underline-offset-8 dark:text-slate-300">Hands-on Experiences</h2>
        <ul class="dark:text-slate-400">
          <li><strong>Authentication</strong> with JWT with token rotation, OAuth2 etc.</li>
          <li><strong>Microservices</strong> for high-volume event processing with RabbitMQ</li>
          <li><strong>Subscription and Payment automation</strong> pipelines</li>
          <li>
            <strong>Async workers</strong> for heavy tasks, reporting, cleanup, and third-party sync
          </li>
          <li>
            <strong>Internal Tooling</strong> for dev workflows, debugging, and admin operations
          </li>
          <li>
            <strong>Webhook-driven Systems</strong> with retries, DLQs, and signature verification
          </li>
          <p class="dark:text-slate-400">
            APIs, real-time services, distributed workers, internal tools, automation scripts, and
            systems designed to so that they remain easier to maintain and scalable when needed.
          </p>
        </ul>

        <p class="dark:text-slate-400">
          If it runs in the background or handles load quietly without fuzz, I probably enjoyed
          building it.
        </p>
        <hr />
      </main>
    </div>
  </div>
</div>
