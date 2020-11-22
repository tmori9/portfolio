import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

// Icon
import SchoolIcon from '@material-ui/icons/School';
import SettingsVoiceIcon from '@material-ui/icons/SettingsVoice';
import WorkIcon from '@material-ui/icons/Work';
import LinkIcon from '@material-ui/icons/Link';

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
          <Box textAlign="jusify">
            ・<a href="https://bizsysd.enpit.jp/" target="_blank" rel="noopener noreferrer">enPiT-BizSysD</a> ビジネスシステムデザイン分野 (公立はこだて未来大学) 修了</Box>
          <Box textAlign="jusify">
            ・<a href="https://aibic.enpit.jp/" target="_blank" rel="noopener noreferrer">enPiT-AiBiC</a> ビッグデータ・AI分野 (東京工業大学) 修了</Box>
        </Typography>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>アルバイト</Typography>
        <List>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary="2019年3月- 札幌のIT企業で姿勢制御の機械学習モデルの作成、マイコンの制御プログラムなどを作成">
            </ListItemText>
        </ListItem>
        </List>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>研究</Typography>
        <List>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary="深層学習を用いた定置網音響画像からの魚種判別・漁獲量予測" 
                        secondary={
                          <React.Fragment>
                            <Typography>
                              <a href="https://www.ieice.org/ken/paper/20200309t1x2/">pdf</a>
                              </Typography>
                          </React.Fragment>
                        }>
            </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary="介護者の負担軽減を目的とした自律走行可能な福祉用具の開発">
            </ListItemText>
        </ListItem>
        </List>
        <Box m={4} />

        <Typography variant="h4" gutterBottom>成果物</Typography>
      <List>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SchoolIcon />
          </Avatar>
        </ListItemAvatar>
          <ListItemText primary="2018年度プロジェクト学習 ビーコンIoTで函館のまちをハックする – BEACON FUN Reloaded 「＠ハナセル」" 
                        secondary={
                          <React.Fragment>
                            <Typography>
                              <a href="https://hanaseru.herokuapp.com/" target="_blank" rel="noopener noreferrer">webサイト</a>
                              </Typography>
                            <Typography>
                              <a href="https://www.fun.ac.jp/wp-content/uploads/2020/03/poster14-1.pdf" target="_blank" rel="noopener noreferrer">ポスター</a>
                            </Typography>
                            <Typography>
                              <a href="https://www.fun.ac.jp/wp-content/uploads/2020/03/document14_A-1.pdf" target="_blank" rel="noopener noreferrer">報告書</a>
                            </Typography>
                          </React.Fragment>
                        }>
            </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <SettingsVoiceIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Alexa スキル 「ゆで卵タイマー」(現在停止中)" 
                        secondary={
                                   <React.Fragment>
                                     <Typography>
                                       <a href="https://www.amazon.co.jp/Tmori-%E3%82%86%E3%81%A7%E5%8D%B5%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/dp/B07GZGB98L"　target="_blank" rel="noopener noreferrer">公開サイト (Amazon)</a>
                                     </Typography>
                                   </React.Fragment>
                                  }>
          </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <SettingsVoiceIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="LINE Clova スキル「ナンバーパンチ ~数字推測×ボクシング~」" 
                      secondary={
                                   <React.Fragment>
                                     <Typography>
                                       <a href="https://www.amazon.co.jp/Tmori-%E3%82%86%E3%81%A7%E5%8D%B5%E3%82%BF%E3%82%A4%E3%83%9E%E3%83%BC/dp/B07GZGB98L"　target="_blank" rel="noopener noreferrer">公開サイト (LINE Clova スキルストア)</a>
                                     </Typography>
                                   </React.Fragment>
                                  }>
          </ListItemText>
        </ListItem>
      </List>

      <Typography variant="h4" gutterBottom>Links</Typography>
      <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
                                <React.Fragment>
                                  <Typography>
                                    <a href="https://github.com/tmori9"　target="_blank" rel="noopener noreferrer">GitHub</a>
                                  </Typography>
                                </React.Fragment>
                              }>
          </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
                                <React.Fragment>
                                  <Typography>
                                    <a href="https://www.slideshare.net/YutoMori2/presentations"　target="_blank" rel="noopener noreferrer">SlideShare</a>
                                  </Typography>
                                </React.Fragment>
                              }>
          </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
                                <React.Fragment>
                                  <Typography>
                                    <a href="https://tmoribanner.hateblo.jp/"　target="_blank" rel="noopener noreferrer">はてなブログ</a>
                                  </Typography>
                                </React.Fragment>
                              }>
          </ListItemText>
        </ListItem>
        <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LinkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={
                                <React.Fragment>
                                  <Typography>
                                    <a href="https://qiita.com/Tmori_banner"　target="_blank" rel="noopener noreferrer">Qiita (停止中)</a>
                                  </Typography>
                                </React.Fragment>
                              }>
          </ListItemText>
        </ListItem>
      </List>
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