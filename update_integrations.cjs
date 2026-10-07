const fs = require("fs");

const integrationsPath = "apps/web/src/components/integrations/IntegrationSetup.tsx";
let content = fs.readFileSync(integrationsPath, "utf8");

// Update to cards
content = content.replace(
  /<fieldset[\s\S]*?<\/fieldset>/m,
  `<fieldset
          aria-label={t\`Integration options\`}
          className="grid grid-cols-2 gap-4"
        >
          {choices
            .filter(({ id }) => !managedOnly || id === "composio" || id === "pipedream")
            .map(({ id, label }) => (
              <button
                key={id}
                type="button"
                aria-pressed={choice === id}
                disabled={busy}
                onClick={() => {
                  setChoice(id);
                  setApiKey("");
                  setError(null);
                }}
                className={\`flex flex-col items-start gap-2 rounded-xl border p-4 text-left transition-colors \${choice === id ? "border-primary bg-primary/5" : "border-border hover:border-foreground/20 bg-card"}\`}
              >
                <span className="font-medium text-foreground">{label}</span>
              </button>
            ))}
        </fieldset>`,
);

// Hiding direct server address logic is already there in the form of <details> but let's make it match the exact text.
// "a direct server address hides behind a switch until you need it"
content = content.replace(
  /<details className="text-sm text-muted-foreground">[\s\S]*?<summary className="cursor-pointer">[\s\S]*?<Trans>Add server URL<\/Trans>[\s\S]*?<\/summary>/m,
  `<details className="mt-4 text-sm text-muted-foreground group">
            <summary className="cursor-pointer font-medium text-foreground hover:underline">
              <Trans>Add a direct server URL instead</Trans>
            </summary>`,
);

fs.writeFileSync(integrationsPath, content);
