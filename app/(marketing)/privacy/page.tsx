export default function PrivacyPage() {
  const sections = [
    { title: 'Information We Collect', body: 'We collect your name and email address at signup. During simulations, we collect your written task submissions to power AI evaluation. We do not collect government ID, financial data, or biometrics. Usage data (pages visited, actions taken) is collected in aggregate and anonymized.' },
    { title: 'How We Use Your Data', body: 'Your data is used to: (1) operate your account and deliver the simulation service; (2) power AI evaluation of your task submissions — task content is sent to OpenAI\'s API and is governed by their data processing agreement; (3) send transactional emails (feedback notifications, billing receipts); (4) improve the platform through aggregate, anonymized analytics. We do not sell your data.' },
    { title: 'Data Sharing', body: 'We share data with: OpenAI (task evaluation), Stripe (billing), AWS (infrastructure), Resend (email), Datadog (monitoring). All third-party processors are governed by data processing agreements. We do not share your data with employers or institutions without your explicit consent.' },
    { title: 'Your Rights', body: 'You have the right to: access your data, correct inaccuracies, delete your account and associated data, export your data in machine-readable format, withdraw consent at any time. To exercise any of these rights, email privacy@metier.com. GDPR and CCPA rights are fully supported.' },
    { title: 'Data Retention', body: 'Active accounts: data retained while account is active plus 90 days after deletion request. Anonymized aggregate data may be retained indefinitely for platform improvement. Backups are retained for 30 days.' },
    { title: 'Security', body: 'All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Passwords are hashed with bcrypt (12 rounds). Access tokens are short-lived JWTs stored only in memory. We conduct annual third-party penetration testing.' },
    { title: 'Cookies', body: 'We use strictly necessary cookies (authentication session). We use analytics cookies only with your consent. You can manage cookie preferences in your account settings or via the cookie consent banner.' },
    { title: 'Contact', body: 'Privacy questions: privacy@metier.com. Data Protection Officer: dpo@metier.com. Mailing address: Métier Career Simulator, 123 Mission St, San Francisco, CA 94105.' },
  ]

  return (
    <div className="bg-[#080812] min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="section-label mb-4">Legal</p>
          <h1 className="font-headline font-black text-white text-5xl tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-neutral-500 text-sm font-body">Last updated: May 28, 2026 · Effective: May 28, 2026</p>
        </div>
        <div className="space-y-8">
          {sections.map((s, i) => (
            <div key={s.title} className="bg-white/[0.03] border border-white/8 rounded-2xl p-7">
              <h2 className="font-headline font-bold text-white text-xl mb-3">{i + 1}. {s.title}</h2>
              <p className="text-neutral-400 font-body text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
