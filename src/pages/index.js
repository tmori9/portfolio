import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Yuto Mori
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" gutterBottom>Portfolio</Typography>
        <Typography variant="h5" gutterBottom>
          <Box textAlign="jusify">名前: Mori Yuto</Box>
          <Box textAlign="jusify">ユーザーネーム: Tmori.</Box>
          <Box textAlign="jusify">出身: 北海道</Box>
          <Box textAlign="jusify">メール: tmori9banner at gmail.com</Box>
        </Typography>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>略歴</Typography>
        <Typography variant="h5" gutterBottom>
          <Box textAlign="jusify">・札幌旭丘高等学校 卒業</Box>
          <Box textAlign="jusify">・公立はこだて未来大学複雑系知能学科 卒業</Box>
          <Box textAlign="jusify">・北海道大学大学院情報科学院 現在</Box>
        </Typography>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>資格、実績</Typography>
        <Typography variant="h5" gutterBottom>
          <Box textAlign="jusify">・基本情報技術者試験 合格</Box>
          <Box textAlign="jusify">・G検定 (JDLA Deep Learning for GENERAL 2019 #3) 合格</Box>
          <Box textAlign="jusify">・enPiT-BizSysD ビジネスシステムデザイン分野 (公立はこだて未来大学) 修了</Box>
          <Box textAlign="jusify">・enPiT-AiBiC ビッグデータ・AI分野 (東京工業大学) 修了</Box>
        </Typography>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>アルバイト</Typography>
        <Typography variant="h5" gutterBottom>
          <Box textAlign="jusify">・2019年3月- 札幌のIT企業で姿勢制御の機械学習モデルの作成、マイコンの制御プログラムなどを作成</Box>
        </Typography>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>研究</Typography>
        <Typography variant="h5" gutterBottom>
          <Box textAlign="jusify">・深層学習を用いた定置網音響画像からの魚種判別・漁獲量予測</Box>
          <Box textAlign="jusify">・介護者の負担軽減を目的とした自律走行可能な福祉用具の開発</Box>
        </Typography>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>成果物</Typography>
        <Typography variant="h5" gutterBottom>
          <Box textAlign="jusify">・2018年度プロジェクト学習 ビーコンIoTで函館のまちをハックする – BEACON FUN Reloaded 「＠ハナセル」</Box>
          <Box textAlign="jusify">・Alexa スキル 「ゆで卵タイマー」(現在停止中)</Box>
          <Box textAlign="jusify">・Line Clova スキル 「ナンバーパンチ ~数字推測×ボクシング~」</Box>
        </Typography>
        <Box m={4} />

      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Yuto Mori's portfolio.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}