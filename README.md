# Setup LLVM & Clang toolchain

🚀 Installs LLVM/Clang and friends for GitHub Actions

<p align=center>
  <img src="">
</p>

## Usage

**Here's what you're after 🚀**

```yml
- uses: cpp-actions/setup-llvm-toolchain@v1
  with:
    llvm-version: "16"
```

### Inputs

- **`llvm-version`:** A specific version of the LLVM toolchain to install. This version can be `1`, `1.2`, or `1.2.3` format. The default is `latest` which is `16` as-of now. LLVM v17 support is coming soon!

- **`set-bin`:** Whether or not to set the `cc` and `c++` binaries to `clang` and `clang++` respectively. By default this is `false`.

- **`set-env`:** Whether or not to set the `$CC` and `$CXX` env vars to `clang` and `clang++` respectively. By default this is `true`.
