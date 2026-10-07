const fs = require("fs");

const onboardingPath = "apps/web/src/pages/Onboarding.tsx";
let content = fs.readFileSync(onboardingPath, "utf8");

// The issue says: Back, Skip and Continue sit at the bottom right.
// This is for the Onboarding wrapper or forms inside it.
// In Onboarding.tsx, we have a section:
// <div className="mt-6 flex gap-3">
//   <Button disabled={!canSaveModel} onClick={() => void saveModel()}>
//     <Trans>Continue</Trans>
//   </Button>
// </div>
content = content.replace(
  /<div className="mt-6 flex gap-3">\s*<Button disabled=\{!canSaveModel\} onClick=\{\(\) => void saveModel\(\)\}>\s*<Trans>Continue<\/Trans>\s*<\/Button>\s*<\/div>/g,
  `<div className="mt-8 flex justify-end gap-3">
              <Button variant="ghost" disabled={!canSaveModel} onClick={() => setStep("integrations")}>
                <Trans>Skip</Trans>
              </Button>
              <Button disabled={!canSaveModel} onClick={() => void saveModel()}>
                <Trans>Continue</Trans>
              </Button>
            </div>`,
);

fs.writeFileSync(onboardingPath, content);
