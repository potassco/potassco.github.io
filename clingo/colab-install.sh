version=${VERSION=5.4.0}

wget -qc "https://github.com/potassco/clingo/archive/v${version}.tar.gz"
tar xf "v${version}.tar.gz"
mkdir -p build
cmake -H"clingo-${version}" -Bbuild -DCMAKE_BUILD_TYPE=Release -DPYTHON_EXECUTABLE=/usr/bin/python3 -DPYCLINGO_USER_INSTALL=off
cmake --build build --target install
