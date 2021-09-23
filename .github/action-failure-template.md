---
title: GitHub Actions Workflow failed - {{ payload.workflow.name }}
assignees: passy
labels: bug
---

The workflow {{ payload }} failed. You can see it at

https://github.com/{{ env.REPOSITORY }}/actions/runs/{{ env.RUN_ID }}
