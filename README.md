# Setup LLVM & Clang toolchain

🚀 Installs LLVM/Clang and friends for GitHub Actions

<p align=center>
  <img src="">
</p>

## Usage

**Here's what you're after 🚀**

```yml
- uses: cpp-actions/setup-llvm@v1
  with:
    llvm-version: "16"
```

### Inputs

- **`llvm-version`:** A specific version of the LLVM toolchain to install. This version field currently only supports major versions (no pinning to `16.0.1` _yet_). The default is `latest`.
