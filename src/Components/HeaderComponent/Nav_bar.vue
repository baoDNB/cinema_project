<template>

        <nav class="nav-bar">
            <div class="logo">
              <router-link to="/"><img src="@/assets/bhd-cineplex-logo.png" alt="BHD Cineplex" /></router-link>
            </div>
            <ul class="nav-links">
                <li class="dropdown">
                    <button class="dropdown-btn">NOW SHOWING ▼</button>
                    <div class="dropdown-content">
                        <router-link to="/movies">LỊCH CHIẾU PHIM</router-link>
                        <router-link to="/cinemas">LỊCH CHIẾU RẠP</router-link>
                    </div>
                </li>
                <li><a href="#">ĐỒ ĂN/COMBO</a></li>
                <li><a href="#">KHUYẾN MÃI</a></li>
                <li><a href="#">DỊCH VỤ</a></li>
                <li class="dropdown">
                    <button class="dropdown-btn">VÉ BHD STAR ▼</button>
                    <div class="dropdown-content">
                        <a href="#">HỆ THỐNG RẠP</a>
                        <a href="#">VỀ CHÚNG TÔI</a>
                        <a href="#">TUYỂN DỤNG</a>
                    </div>
                </li>
            </ul>
            <div class="actions">
                <button class="location">HÀ NỘI ▼</button>
                <button class="login">Đăng nhập/Đăng ký</button>
            </div>
        </nav>

</template>

<script>
export default {
    name: "Nav_bar",
};
</script>

<style scoped>
.header {
    background: white;
}

.top-banner img {
    width: 100%;
}

.nav-bar {
    display: flex;
    position: sticky;
    align-items: center;
    padding: 20px 75px;
    background: white;
    top: 0;
    left: 0;
    z-index: 1000;
}

.logo img {
    height: 40px;
    margin-right: 20px;
}

.nav-links {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 30px;
    font-family: Arial, sans-serif;
    font-weight: bold;
    font-size: 14px;
}

.nav-links a {
    text-decoration: none;
    color: black;
}

.actions {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 15px;
}

button {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-weight: bold;
}

.location {
    border: 1px solid gray;
    background: white;
}

.login {
    background: #72be43;
    color: white;
}

.dropdown {
    position: relative;
}

.dropdown-btn {
    background-color: transparent;
    color: black;
    border: none;
    cursor: pointer;
    padding: 10px 15px;
    font-weight: bold;
    font-family: Arial, sans-serif;
}

.dropdown-btn:hover {
    color: #4CAF50;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    min-width: 180px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    border-radius: 5px;
    top: 100%;
    left: 0;
    padding: 5px 0;
}

.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown-content a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
